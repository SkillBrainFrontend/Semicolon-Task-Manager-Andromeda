import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const appSlice = createSlice({
	name: "app",
	initialState: {
		ui: {
			sidebar: {
				isOpen: true,
			},
			modal: {
				isOpen: false,
				modalType: null,
			},
		},
		auth: {
			isLoggedIn: false,
			isLoading: false,
			error: null,
			loggedUser: {
				accessToken: null,
			},
		},
	},
	reducers: {
		tooggleSidebar: (state) => {
			state.ui.sidebar.isOpen = !state.ui.sidebar.isOpen;
		},
		openSidebar: (state) => {
			state.ui.sidebar.isOpen = true;
		},
		closeSidebar: (state) => {
			state.ui.sidebar.isOpen = false;
		},
		tooggleModal: (state) => {
			state.ui.modal.isOpen = !state.ui.modal.isOpen;
		},
		openModal: (state, action) => {
			state.ui.modal.isOpen = true;
			state.ui.modal.modalType = action.payload;
		},
		closeModal: (state) => {
			state.ui.modal.isOpen = false;
			state.ui.modal.modalType = null;
		},
		loginStart: (state) => {
			state.auth.isLoading = true;
		},
		loginError: (state, action) => {
			state.auth.isLoading = false;
			state.auth.error = action.payload;
			state.auth.isLoggedIn = false;
			state.auth.loggedUser = {
				accessToken: null,
			};
		},
		logInSuccess: (state, action) => {
			state.auth.isLoggedIn = true;
			state.auth.isLoading = false;
			state.auth.error = null;
			state.auth.loggedUser.accessToken = action.payload;
		},
		logOut: (state) => {
			state.auth.isLoggedIn = false;
			state.auth.loggedUser = {
				accessToken: null,
			};
		},
	},
});

export const {
	tooggleSidebar,
	openSidebar,
	closeSidebar,
	tooggleModal,
	openModal,
	closeModal,
	logInSuccess,
	loginStart,
	loginError,
	logOut,
} = appSlice.actions;

export const logInAction = (payload) => async (dispatch) => {
	dispatch(loginStart());
	try {
		const response = await axios.post(`${API_BASE_URL}/auth/signin`, {
			email: payload.email,
			password: payload.password,
		});
		dispatch(logInSuccess(response.data));
	} catch (e) {
		dispatch(loginError(e.message));
	}
};

export default appSlice.reducer;
