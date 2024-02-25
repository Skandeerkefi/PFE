import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage,HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage} from "./Routes.js";
const App = () => {
	return (
		
		<BrowserRouter>
			<Routes>
			<Route path='/HomePage' element={<HomePage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/sign-up' element={<SignupPage />} />
			<Route path='/products' element={<ProductsPage />} />
			<Route path='/best-selling' element={<BestSellingPage />} />
			<Route path='/events' element={<EventsPage />} />
			<Route path='/faq' element={<FAQPage />} />


			</Routes>
		</BrowserRouter>
	);
};

export default App;
