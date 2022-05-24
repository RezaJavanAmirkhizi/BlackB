import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axios";

const EditPassword = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [success, setSuccess] = useState(false);

	const [password, setPassword] = useState({
		current_password: "",
		new_password: "",
	});

	const change = (e) => {
		e.preventDefault();

		const token = JSON.parse(localStorage.getItem("access_token"));

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		axios
			.put("/users/update-password", JSON.stringify(password), config)
			.then((response) => {
				console.log(response.data);
				setSuccess(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="form-container">
			<form onSubmit={change} className="login">
				{success ? (
					<>
						<h2>Your password has been changed</h2>
						<Link to="/dashboard">Go to dashboard</Link>
					</>
				) : (
					<>
						<div className="sign-header">
							<h1>Welcome Back</h1>
							<h4>Please select your new password</h4>
						</div>
						<input
							onChange={(e) => {
								setPassword({
									...password,
									current_password: e.target.value,
								});
							}}
							type="password"
							placeholder="Old password"
						/>
						<input
							onChange={(e) => {
								setPassword({
									...password,
									new_password: e.target.value,
								});
							}}
							type="password"
							placeholder="New password"
						/>
						<button className="submit">Change</button>
					</>
				)}
			</form>
		</div>
	);
};

export default EditPassword;
