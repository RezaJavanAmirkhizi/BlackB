import "../styles/index.scss";
import MainPage from "./mianPage";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./account/Dashboard"

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
			<Route exact path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
}

export default App;
