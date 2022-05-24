import axios from "../../api/axios";

const posts = () => (dispatch) => {
	axios
		.get("/blog")
		.then((response) => {
			dispatch({
				type: "GET_POST",
				payload: response.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export default posts;
