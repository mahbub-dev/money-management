import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import TrxItem from "./Components/TrxtItem/TrxItem";
import Dashboard from "./Components/Dashbord/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navgationbar from "./Components/Navbar/Navbar";
function App() {
	const userId = localStorage.getItem("userId");
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							userId ? <Navigate to={"/dashboard"} /> : <Login />
						}
					/>
					<Route
						path="/dashboard"
						element={
							!userId ? <Navigate to={"/"} /> : <Dashboard />
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
