/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./login.scss";
import { useState } from "react";

const Login = () => {
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const handleChange = (e) => {
		setUserInfo((p) => ({ ...p, [e.target.name]: e.target.value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};
	return (
		<div className="container-flued bg-dark text-white">
			<div className="row sign-in">
				<div className="col my-auto d-flex flex-column p-5 text-start ">
					<h2 className="title">Welcome Back</h2>
					<p className="desc mb-4 ">
						Welcome back! Please enter your details
					</p>
					<form
						onSubmit={handleSubmit}
						className="form d-flex flex-column"
					>
						<label htmlFor="email" className="mb-1">
							Email
						</label>
						<input
							type="email"
							class="form-control"
							value={userInfo.email}
							required
							name="email"
							id="email"
							placeholder="Enter your email"
							onChange={handleChange}
						/>

						<label htmlFor="password" className="mt-3 mb-1">
							Password
						</label>
						<input
							class="form-control"
							type="password"
							required
							name="password"
							value={userInfo.password}
							id="password"
							placeholder='Enter your password'
							onChange={handleChange}
						/>
						<a
							href="#"
							style={{ width: "fit-content" }}
							className="my-3 text-decoration-none text-secondary"
						>
							Forgot password
						</a>
						<button
							className="btn form-btn"
							disabled={
								!Object.values(userInfo).every(
									(i) => i !== "" && i.length > 6
								)
							}
						>
							{!loading ? "Sign in" : "Processing"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
