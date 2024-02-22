import { createReducer } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
	isAuthenticated: false,
	loading: false,
	addressloading: false,
	user: null,
	error: null,
	successMessage: null,
	users: [],
	usersLoading: false,
};

// Create reducer using createReducer
export const userReducer = createReducer(initialState, (builder) => {
	builder
		// Load user actions
		.addCase("LoadUserRequest", (state) => {
			state.loading = true;
		})
		.addCase("LoadUserSuccess", (state, action) => {
			state.isAuthenticated = true;
			state.loading = false;
			state.user = action.payload;
			state.error = null; // Clear any previous errors
		})
		.addCase("LoadUserFail", (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.isAuthenticated = false;
		})
		// Update user info actions
		.addCase("updateUserInfoRequest", (state) => {
			state.loading = true;
		})
		.addCase("updateUserInfoSuccess", (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.error = null; // Clear any previous errors
		})
		.addCase("updateUserInfoFailed", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		// Update user address actions
		.addCase("updateUserAddressRequest", (state) => {
			state.addressloading = true;
		})
		.addCase("updateUserAddressSuccess", (state, action) => {
			state.addressloading = false;
			state.successMessage = action.payload.successMessage;
			state.user = action.payload.user;
		})
		.addCase("updateUserAddressFailed", (state, action) => {
			state.addressloading = false;
			state.error = action.payload;
		})
		// Delete user address actions
		.addCase("deleteUserAddressRequest", (state) => {
			state.addressloading = true;
		})
		.addCase("deleteUserAddressSuccess", (state, action) => {
			state.addressloading = false;
			state.successMessage = action.payload.successMessage;
			state.user = action.payload.user;
		})
		.addCase("deleteUserAddressFailed", (state, action) => {
			state.addressloading = false;
			state.error = action.payload;
		})
		// Get all users actions (admin)
		.addCase("getAllUsersRequest", (state) => {
			state.usersLoading = true;
		})
		.addCase("getAllUsersSuccess", (state, action) => {
			state.usersLoading = false;
			state.users = action.payload;
		})
		.addCase("getAllUsersFailed", (state, action) => {
			state.usersLoading = false;
			state.error = action.payload;
		})
		// Clear errors and success messages
		.addCase("clearErrors", (state) => {
			state.error = null;
		})
		.addCase("clearMessages", (state) => {
			state.successMessage = null;
		});
});
