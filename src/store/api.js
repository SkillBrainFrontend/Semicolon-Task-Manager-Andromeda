import { createSlice } from "@reduxjs/toolkit";

export const initializeState = {
	isLoading: false,
	error: null,
};

export const createGenericSlice = ({ name = "", initialState, reducers }) =>
	createSlice({
		name,
		initialState,
		reducers: {
			fetchStart(state) {
				state.isLoading = true;
				state.error = null;
			},
			fetchSuccess(state) {
				state.error = null;
				state.isLoading = false;
			},
			fetchError(state, action) {
				state.isLoading = false;
				state.error = action.payload;
			},
			/**
			 * If you want to write to values of the state that depend on the generic
			 * (in this case: `state.data`, which is T), you might need to specify the
			 * State type manually here, as it defaults to `Draft<GenericState<T>>`,
			 * which can sometimes be problematic with yet-unresolved generics.
			 * This is a general problem when working with immer's Draft type and generics.
			 */
			...reducers,
		},
	});
