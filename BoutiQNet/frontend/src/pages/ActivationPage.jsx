import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const searchParams = new URLSearchParams(location.search);
	const activation_token = searchParams.get("token");

	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (activation_token) {
			const sendRequest = async () => {
				try {
					const response = await axios.post(`${server}/user/activation`, {
						activation_token,
					});
					const { token } = response.data;
					localStorage.setItem("token", token);
					// Redirect to login page after successful activation
					setTimeout(() => navigate("/login"), 2000);
				} catch (error) {
					setError(true);
				} finally {
					setLoading(false);
				}
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
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Your token is expired!</p>
			) : (
				<p>Your account has been created successfully!</p>
			)}
		</div>
	);
};

export default ActivationPage;
