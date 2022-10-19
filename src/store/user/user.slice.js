import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const userSlice = createSlice({
	name: "app",
	initialState: {
		user: {
			isLoading: false,
			errors: null,
			loggedUser: {
				id: "45d79f89-851b-42ea-91a8-28e9e6e416c4",
				email: "email@test.com",
				fullName: "Sasa Sasa",
				profilePicture:
					"https://semicolontaskmanager.s3.eu-central-1.amazonaws.com/1666194944570%20-%20array%20methods.jpg",
				tasks: [],
			},
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
		uploadPictureSuccess: (state, action) => {
			state.user.isLoading = false;
			state.user.error = null;
			state.user.loggedUser = action.payload;
		},
	},
});

export const {
	registerSuccess,
	registerStart,
	registerError,
	uploadPictureSuccess,
} = userSlice.actions;

export const registerAction =
	(payload, onSuccess, onError) => async (dispatch) => {
		dispatch(registerStart());
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
			dispatch(registerError(e.response.data.message));
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
			// await axios.post(`${API_BASE_URL}/user/upload`, {

			// });

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
