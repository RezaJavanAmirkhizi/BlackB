import Header from "./Header";
import FirstPart from "./FirstPart";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const MainPage = () => {


	const [auth, setAuth] = useState(localStorage.getItem("access_token")? true : false);
	const [user, setUser] = useState(localStorage.getItem("access_token") ? jwt_decode(localStorage.getItem("access_token")) : null);

	return (
		<>
			<Header user={user} auth={auth} />
			<FirstPart />
			<Cards />
		</>
	);
};

export default MainPage;
