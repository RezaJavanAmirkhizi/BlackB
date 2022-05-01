function Profile() {
    return (
		<div className="dashboard-boxes">
			<h1>User informations</h1>
			<div className="row">
				<p>Full Name:</p>
				<p>Reza</p>
			</div>
			<div className="row">
				<p>Email:</p>
				<p>Reza.j@gmail.com</p>
			</div>
			<div className="row">
				<p>Username:</p>
				<p>Rezaj</p>
			</div>
			<button className="change">Change Password</button>
		</div>
	);
}

export default Profile;