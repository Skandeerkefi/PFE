import axios from "axios";
import { server } from "../../server";

// Action Types
export const ActionTypes = {
	LOAD_USER_REQUEST: "LOAD_USER_REQUEST",
	LOAD_USER_SUCCESS: "LOAD_USER_SUCCESS",
	LOAD_USER_FAILURE: "LOAD_USER_FAILURE",
	LOAD_SELLER_REQUEST: "LOAD_SELLER_REQUEST",
	LOAD_SELLER_SUCCESS: "LOAD_SELLER_SUCCESS",
	LOAD_SELLER_FAILURE: "LOAD_SELLER_FAILURE",
	UPDATE_USER_INFO_REQUEST: "UPDATE_USER_INFO_REQUEST",
	UPDATE_USER_INFO_SUCCESS: "UPDATE_USER_INFO_SUCCESS",
	UPDATE_USER_INFO_FAILURE: "UPDATE_USER_INFO_FAILURE",
	UPDATE_USER_ADDRESS_REQUEST: "UPDATE_USER_ADDRESS_REQUEST",
	UPDATE_USER_ADDRESS_SUCCESS: "UPDATE_USER_ADDRESS_SUCCESS",
	UPDATE_USER_ADDRESS_FAILURE: "UPDATE_USER_ADDRESS_FAILURE",
	DELETE_USER_ADDRESS_REQUEST: "DELETE_USER_ADDRESS_REQUEST",
	DELETE_USER_ADDRESS_SUCCESS: "DELETE_USER_ADDRESS_SUCCESS",
	DELETE_USER_ADDRESS_FAILURE: "DELETE_USER_ADDRESS_FAILURE",
	GET_ALL_USERS_REQUEST: "GET_ALL_USERS_REQUEST",
	GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",
	GET_ALL_USERS_FAILURE: "GET_ALL_USERS_FAILURE",
};

// Action Creators
export const loadUser = () => async (dispatch) => {
	dispatch({ type: ActionTypes.LOAD_USER_REQUEST });
	try {
		const { data } = await axios.get(`${server}/user/getUser`, {
			withCredentials: true,
		});
		dispatch({ type: ActionTypes.LOAD_USER_SUCCESS, payload: data.user });
	} catch (error) {
		dispatch({
			type: ActionTypes.LOAD_USER_FAILURE,
			payload: error.response?.data?.message || "Unknown error",
		});
	}
};

export const loadSeller = () => async (dispatch) => {
	dispatch({ type: ActionTypes.LOAD_SELLER_REQUEST });
	try {
		const { data } = await axios.get(`${server}/shop/getSeller`, {
			withCredentials: true,
		});
		dispatch({ type: ActionTypes.LOAD_SELLER_SUCCESS, payload: data.seller });
	} catch (error) {
		dispatch({
			type: ActionTypes.LOAD_SELLER_FAILURE,
			payload: error.response?.data?.message || "Unknown error",
		});
	}
};

export const updateUserInformation =
	(name, email, phoneNumber, password) => async (dispatch) => {
		dispatch({ type: ActionTypes.UPDATE_USER_INFO_REQUEST });
		try {
			const { data } = await axios.put(
				`${server}/user/update-user-info`,
				{ email, password, phoneNumber, name },
				{
					withCredentials: true,
					headers: { "Access-Control-Allow-Credentials": true },
				}
			);
			dispatch({
				type: ActionTypes.UPDATE_USER_INFO_SUCCESS,
				payload: data.user,
			});
		} catch (error) {
			dispatch({
				type: ActionTypes.UPDATE_USER_INFO_FAILURE,
				payload: error.response?.data?.message || "Unknown error",
			});
		}
	};

export const updateUserAddress =
	(country, city, address1, address2, zipCode, addressType) =>
	async (dispatch) => {
		dispatch({ type: ActionTypes.UPDATE_USER_ADDRESS_REQUEST });
		try {
			const { data } = await axios.put(
				`${server}/user/update-user-addresses`,
				{ country, city, address1, address2, zipCode, addressType },
				{ withCredentials: true }
			);
			dispatch({
				type: ActionTypes.UPDATE_USER_ADDRESS_SUCCESS,
				payload: {
					successMessage: "User address updated successfully!",
					user: data.user,
				},
			});
		} catch (error) {
			dispatch({
				type: ActionTypes.UPDATE_USER_ADDRESS_FAILURE,
				payload: error.response?.data?.message || "Unknown error",
			});
		}
	};

export const deleteUserAddress = (id) => async (dispatch) => {
	dispatch({ type: ActionTypes.DELETE_USER_ADDRESS_REQUEST });
	try {
		const { data } = await axios.delete(
			`${server}/user/delete-user-address/${id}`,
			{ withCredentials: true }
		);
		dispatch({
			type: ActionTypes.DELETE_USER_ADDRESS_SUCCESS,
			payload: {
				successMessage: "User deleted successfully!",
				user: data.user,
			},
		});
	} catch (error) {
		dispatch({
			type: ActionTypes.DELETE_USER_ADDRESS_FAILURE,
			payload: error.response?.data?.message || "Unknown error",
		});
	}
};

export const getAllUsers = () => async (dispatch) => {
	dispatch({ type: ActionTypes.GET_ALL_USERS_REQUEST });
	try {
		const { data } = await axios.get(`${server}/user/admin-all-users`, {
			withCredentials: true,
		});
		dispatch({ type: ActionTypes.GET_ALL_USERS_SUCCESS, payload: data.users });
	} catch (error) {
		dispatch({
			type: ActionTypes.GET_ALL_USERS_FAILURE,
			payload: error.response?.data?.message || "Unknown error",
		});
	}
};
