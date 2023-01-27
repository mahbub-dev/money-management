import React from "react";

const User = ({ user }) => {
	return (
		<div className="user d-flex me-3 mb-3 mb-md-0 ">
			<img
				className="img-fluid rounded-circle"
				width="40px"
				height={"20px"}
				src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
				alt="user"
			/>
		</div>
	);
};

export default User;
