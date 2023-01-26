import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./addclients.scss";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const AddClients = (props) => {
	const [inputData, setInputData] = useState({
		name: "",
		phone: "",
		email: "",
		profilePicture: "",
	});
	const handleChange = (e) => {
		setInputData((p) => ({ ...p, [e.target.name]: e.target.value }));
	};
	return (
		<div className="add-clients">
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Form>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">
							Add Clients
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Label className="mt-2 d-flex">Name</Form.Label>
						<Form.Control
							type="text"
							name="name"
							placeholder="Enter Name"
							value={inputData.name}
							onChange={handleChange}
						/>
						<Form.Label className="mt-2 d-flex">Phone</Form.Label>
						<Form.Control
							type="text"
							name="phone"
							value={inputData.phone}
							onChange={handleChange}
							placeholder="Enter Phone"
						/>
						<Form.Label className="mt-2 d-flex">Email</Form.Label>
						<Form.Control
							name="email"
							type="email"
							value={inputData.email}
							onChange={handleChange}
							placeholder="Enter Email"
						/>
						<Form.Label className="mt-2 d-flex">
							Profile Picture
						</Form.Label>
						<Form.Control
							value={inputData.profilePicture}
							onChange={handleChange}
							type="file"
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="dark"
							className="text-start mt-2  d-flex"
							type="submit"
						>
							Submit
						</Button>
						<Button onClick={props.onHide}>Close</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	);
};

export default AddClients;
