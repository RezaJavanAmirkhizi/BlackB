import { connect } from "react-redux";
import { useEffect, useState } from "react";
import loggedUser from "../../data/actions/loggedUser";
import { Link } from "react-router-dom";

function Profile(props) {
	const [userInfo, setUserInfo] = useState(props.user[0]);

	useEffect(() => props.loggedUser(), []);

	useEffect(() => setUserInfo(props.user[0]), [props.user]);

	return userInfo ? (
		<div className="dashboard-boxes">
			<h1>User informations</h1>
			<div className="row">
				<p>Full Name:</p>
				<p>{}</p>
			</div>
			<div className="row">
				<p>Email:</p>
				<p>{userInfo.email}</p>
			</div>
			<div className="row">
				<p>Username:</p>
				<p>{userInfo.username}</p>
			</div>
			<div className="row">
				<Link to="/changePassword">
					<button className="change">Change Password</button>
				</Link>
				<Link to="/completeInfo">
					<button className="change">Complete information</button>
				</Link>
			</div>
		</div>
	) : (
		<div className="dashboard-boxes">
			<h1>Please wait...</h1>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps, { loggedUser })(Profile);
