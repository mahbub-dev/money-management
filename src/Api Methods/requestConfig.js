import axios from "axios";
const BASEURL = "http://localhost:5000/";
const token = localStorage.getItem("token");
export const userRequest = axios.create({
	baseURL: BASEURL,
	headers: {
		Authorization: `Beare ${token}`,
		"Content-Type": "application/json",
	},
});
export default userRequest;
