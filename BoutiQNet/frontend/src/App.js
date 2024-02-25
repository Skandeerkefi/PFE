import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActivationPage, LoginPage, SignupPage } from "./Routes.js";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";

const App = () => {
	useEffect(() => {
		Store.dispatch(loadUser());
	}, []);
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
