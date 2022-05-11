import axios from "../../api/axios";

const loggedUser = () => (dispatch) => {

	const id = localStorage.getItem("userID");
	console.log(id);

	axios
		.get(`/dashboard/${id}`)
		.then((response) => {
			const fullName = response.data.name;
			const username = response.data.username;
			const email = response.data.email;
			dispatch({
				type: "LOGGED_USER",
				payload: {
					fullName,
					email,
					username,
				},
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export default loggedUser;
