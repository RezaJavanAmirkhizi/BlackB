import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

const Login = () => {
	const errRef = useRef();

	const [errorMessage, setErrorMessage] = useState("");
	const [success, setSuccess] = useState(false);

	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const login = (e) => {
		e.preventDefault();


		const params = new URLSearchParams();
		params.append("username", user.username);
		params.append("password", user.password);

		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		};

		console.log(user);
		axios
			.post("/auth/token", params, config)
			.then((response) => {
				console.log(response);
				console.log(response.status);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="form-container">
			<form onSubmit={login} className="login">
				{success ? (
					<>
						<h2>you have logged in</h2>
						<Link to="/">Go to home</Link>
					</>
				) : (
					<>
						<div className="sign-header">
							<h1>Welcome Back</h1>
							<h4>Please login to your account</h4>
						</div>
						<input
							onChange={(e) => {
								setUser({ ...user, username: e.target.value });
							}}
							type="text"
							placeholder="Username"
						/>
						<input
							onChange={(e) => {
								setUser({ ...user, password: e.target.value });
							}}
							type="password"
							placeholder="Password"
						/>
						<button className="submit">Login</button>
						<p>
							Don't have an account?{" "}
							<Link
								to="/register"
								style={{ textDecoration: "none" }}
							>
								Register
							</Link>
						</p>
					</>
				)}
			</form>
		</div>
	);
};

export default Login;
