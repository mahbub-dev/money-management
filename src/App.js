import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import TrxItem from "./Components/TrxtItem/TrxItem";
import Dashboard from "./Components/Dashbord/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navgationbar from "./Components/Navbar/Navbar";
function App() {
	return (
		<div className="App">
			<Dashboard />
		</div>
	);
}

export default App;
