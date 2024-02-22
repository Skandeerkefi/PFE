import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const searchParams = new URLSearchParams(location.search);
	const activation_token = searchParams.get("token");

	const [error, setError] = useState(false);

	useEffect(() => {
		if (activation_token) {
			const sendRequest = async () => {
				await axios
					.post(`${server}/user/activation`, {
						activation_token,
					})
					.then((res) => {
						const { token } = res.data;
						localStorage.setItem("token", token);
					})
					.catch((err) => {
						setError(true);
					})
					.finally(() => {
						setTimeout(() => navigate("/login"), 3000);
					});
			};
			sendRequest();
		}
	}, [activation_token, navigate]);

	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{error ? (
				<p>Your token is expired!</p>
			) : (
				<p>Your account has been created suceessfully!</p>
			)}
		</div>
	);
};

export default ActivationPage;
