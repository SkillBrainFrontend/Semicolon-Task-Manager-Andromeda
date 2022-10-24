import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

import { loginError, loginStart, uploadPictureSuccess } from "../app/app.slice";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const userSlice = createSlice({
	name: "app",
	initialState: {
		user: {
			isLoading: false,
			errors: null,
		},
	},
	reducers: {
		registerStart: (state) => {
			state.user.isLoading = true;
		},
		registerError: (state, action) => {
			state.user.isLoading = false;
			state.user.error = action.payload;
		},
		registerSuccess: (state) => {
			state.user.isLoading = false;
			state.user.error = null;
		},
	},
});

export const { registerSuccess, registerStart, registerError } =
	userSlice.actions;

export const registerAction =
	(payload, onSuccess, onError) => async (dispatch) => {
		dispatch(loginStart());
		try {
			await axios.post(`${API_BASE_URL}/auth/signup`, {
				email: payload.email,
				password: payload.password,
				fullName: payload.name,
			});
			dispatch(registerSuccess());
			if (onSuccess) {
				onSuccess();
			}
		} catch (e) {
			dispatch(loginError(e.response.data.message));
			if (onError) {
				onError(e.response.data.message);
			}
		}
	};

export const uploadProfilePicture =
	(payload, onSuccess, onError) => async (dispatch, getState) => {
		const state = getState();
		dispatch(registerStart());
		const token = state.app.auth.loggedUser.accessToken.accessToken;

		try {
			const response = axios.post(
				`${API_BASE_URL}/user/upload`,
				{ file: payload.image },
				{
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: `Bearer ${token}`,
					},
					mode: "no-cors",
				}
			);

			dispatch(uploadPictureSuccess((await response).data));
		} catch (e) {
			dispatch(registerError(e.response.data.message));
			if (onError) {
				onError(e.response.data.message);
			}
		}
	};

export default userSlice.reducer;
