import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

const Register = () => {
	const errRef = useRef();

	const [errorMessage, setErrorMessage] = useState("");
	const [success, setSuccess] = useState(false);

	const [user, setUser] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	const [confirmPassword, setConfirmPassword] = useState("");

	const [validUser, setValidUser] = useState(false);
	const [validPassword, setValidPassword] = useState(false);
	const [validEmail, setValidEmail] = useState(false);
	const [matchPassword, setMatchPassword] = useState(false);

	const [userFocus, setUserFocus] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);
	const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

	const history = useNavigate();

	useEffect(() => {
		checkValid();
	}, [user, confirmPassword]);

	const checkValid = () => {
		if (USER_REGEX.test(user.username)) {
			setValidUser(true);
		} else {
			setValidUser(false);
		}
		if (PWD_REGEX.test(user.password)) {
			setValidPassword(true);
		} else {
			setValidPassword(false);
		}
		if (EMAIL_REGEX.test(user.email)) {
			setValidEmail(true);
		} else {
			setValidEmail(false);
		}
		if (confirmPassword === user.password) {
			setMatchPassword(true);
		} else {
			setMatchPassword(false);
		}
	};

	const register = (e) => {
		if (validUser && validPassword && validEmail && matchPassword) {
			axios
				.post("/auth/register", JSON.stringify(user))
				.then((response) => {
					setSuccess(true);
				})
				.catch((err) => {
					console.log(err);
				});
			setUser({
				name: "",
				username: "",
				email: "",
				password: "",
			});
			setConfirmPassword("");
		} else {
			console.log(validUser, validPassword, validEmail, matchPassword);
			console.log("Some input not currect");
		}

		e.preventDefault();
	};

	return (
		<div className="form-container">
			<form onSubmit={register} className="register">
				{success ? (
					<h2>you have registered</h2>
				) : (
					<>
						<h2
							ref={errRef}
							className={errorMessage ? "on-error" : "offscreen"}
						>
							{errorMessage}
						</h2>
						<div className="sign-header">
							<h1>Welcome to our website</h1>
							<h4>Please register to continue</h4>
						</div>
						<input
							onChange={(e) => {
								setUser({ ...user, name: e.target.value });
							}}
							type="text"
							placeholder="Full Name"
							value={user.fullName}
						/>
						<input
							onChange={(e) => {
								setUser({ ...user, email: e.target.value });
							}}
							type="text"
							placeholder="Email"
							aria-invalid={validEmail ? "false" : "true"}
							aria-describedby="emnote"
							onFocus={() => setEmailFocus(true)}
							onBlur={() => setEmailFocus(false)}
							value={user.email}
						/>
						<p
							id="emdnote"
							className={
								emailFocus && user.email && !validEmail
									? "instructions"
									: "offscreen"
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							Uppercase (A-Z) and lowercase (a-z) English letters.
							<br />
							Digits (0-9).
							<br />
							Characters ! # $ % & ' * + - / = ? ...
							<br />
							Character.
						</p>
						<input
							onChange={(e) => {
								setUser({ ...user, username: e.target.value });
							}}
							type="text"
							placeholder="Username"
							aria-invalid={validUser ? "false" : "true"}
							aria-describedby="usnote"
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
							value={user.username}
						/>
						<p
							id="usdnote"
							className={
								userFocus && user.username && !validUser
									? "instructions"
									: "offscreen"
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							4 to 24 characters.
							<br />
							Must begin with a letter.
							<br />
							Letters, numbers, underscores, hyphens allowed.
						</p>
						<input
							onChange={(e) => {
								setUser({ ...user, password: e.target.value });
							}}
							type="password"
							placeholder="Password"
							aria-invalid={validPassword ? "false" : "true"}
							aria-describedby="psnote"
							onFocus={() => setPasswordFocus(true)}
							onBlur={() => setPasswordFocus(false)}
							value={user.password}
						/>
						<p
							id="psnote"
							className={
								passwordFocus && user.password && !validPassword
									? "instructions"
									: "offscreen"
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							8 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a
							number and a special character.
							<br />
							Allowed special characters:{" "}
							<span>!, @, #, $, %</span>
						</p>
						<input
							onChange={(e) => {
								setConfirmPassword(e.target.value);
							}}
							type="password"
							placeholder="Confirm Password"
							aria-invalid={matchPassword ? "false" : "true"}
							aria-describedby="cpsnote"
							onFocus={() => setConfirmPasswordFocus(true)}
							onBlur={() => setConfirmPasswordFocus(false)}
							value={confirmPassword}
						/>
						<p
							id="cpsnote"
							className={
								confirmPasswordFocus &&
								confirmPassword &&
								!matchPassword
									? "instructions"
									: "offscreen"
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							Must match the first password input field.
						</p>
						<button className="submit">Register</button>
					</>
				)}
				<p>
					Already have an account?{" "}
					<Link to="/login" style={{ textDecoration: "none" }}>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;
