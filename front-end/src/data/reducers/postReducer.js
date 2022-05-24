const postReducer = (posts = [], action) => {
	if (action.type === "GET_POST") {
		return [...posts, action.payload];
	} else {
		return posts;
	}
};

export default postReducer;
