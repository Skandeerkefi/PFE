import React from "react";
import ReactDOM from "react-dom"; // Correct import statement
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

reportWebVitals();
