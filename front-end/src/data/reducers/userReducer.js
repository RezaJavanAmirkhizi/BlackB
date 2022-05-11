const userReducer = (user = [], action) => {
	if (action.type === "LOGGED_USER") {
		return [...user, action.payload];
	}
	else{
		return user
	}
};

export default userReducer;
