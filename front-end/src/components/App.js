import "../styles/index.scss";
import MainPage from "./mianPage";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<>
						<MainPage />
					</>
				}
			/>
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/register" element={<Register />} />
		</Routes>
	);
}

export default App;
