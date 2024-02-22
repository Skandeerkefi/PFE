import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActivationPage, LoginPage, SignupPage } from "./Routes.js";
import { loadUser } from "./redux/actions/user";
import { useDispatch } from "react-redux"; // Import useDispatch hook
import Store from "./redux/store";

const App = () => {
	const dispatch = useDispatch(); // Initialize useDispatch hook

	useEffect(() => {
		Store.dispatch(loadUser()); // Dispatch the action to load user on component mount
	}, [dispatch]); // Add dispatch as a dependency to useEffect

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/sign-up' element={<SignupPage />} />
				<Route
					path='/activation/:activation_token'
					element={<ActivationPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
