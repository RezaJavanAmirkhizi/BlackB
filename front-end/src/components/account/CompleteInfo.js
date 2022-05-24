import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

function CompleteInfo() {
	const [errorMessage, setErrorMessage] = useState("");
	const [success, setSuccess] = useState(false);

	const [profile, setProfile] = useState({
		bio: "",
		age: "",
		phone: "",
	});

	const update = (e) => {
		e.preventDefault();

		const token = JSON.parse(localStorage.getItem("access_token"));

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		axios
			.put("/users/profile", JSON.stringify(profile), config)
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
			<form onSubmit={update} className="login">
				{success ? (
					<>
						<h2>Your profile has been completed</h2>
						<Link to="/dashboard">Go to dashboard</Link>
					</>
				) : (
					<>
						<div className="sign-header">
							<h1>Welcome Back</h1>
							<h4>Please complete your profile</h4>
						</div>
						<input
							onChange={(e) => {
								setProfile({
									...profile,
									bio: e.target.value,
								});
							}}
							type="text"
							placeholder="Bio"
						/>
						<input
							onChange={(e) => {
								setProfile({
									...profile,
									age: e.target.value,
								});
							}}
							type="number"
							placeholder="Age"
						/>
						<input
							onChange={(e) => {
								setProfile({
									...profile,
									phone: e.target.value,
								});
							}}
							type="number"
							placeholder="Phone number"
						/>
						<button className="submit">complete Profile</button>
					</>
				)}
			</form>
		</div>
	);
}

export default CompleteInfo;
