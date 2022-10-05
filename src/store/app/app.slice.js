/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
	name: "app",
	initialState: {
		ui: {
			sidebar: {
				isOpen: true,
			},
			modal: {
				isOpen: true,
				modalType: null,
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
	},
});

export const {
	tooggleSidebar,
	openSidebar,
	closeSidebar,
	tooggleModal,
	openModal,
	closeModal,
} = appSlice.actions;

export default appSlice.reducer;
