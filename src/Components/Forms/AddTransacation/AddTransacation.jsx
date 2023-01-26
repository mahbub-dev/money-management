import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddTransacation = (props) => {
	const [inputData, setInputData] = useState({
		clientId: "",
		amount: "",
		type: "",
		desc: "",
	});
	const handleChange = (e) => {
		setInputData((p) => ({ ...p, [e.target.name]: e.target.value }));
	};
	return (
		<div className="add-transaction">
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Form>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">
							Add Transactions
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Label className="mt-2 d-flex">Type</Form.Label>
						<Form.Select>
							<option>Select Type</option>
							<option>Receiver</option>
							<option>Sender</option>
						</Form.Select>

						<Form.Label className="mt-2 d-flex">Client</Form.Label>
						<Form.Select>
							<option>Select Client</option>
							<option>Client1</option>
							<option>Client2</option>
						</Form.Select>

						<Form.Label className="mt-2 d-flex">Amount</Form.Label>
						<Form.Control
							name="amount"
							type="text"
							value={inputData.amount}
							onChange={handleChange}
							placeholder="Enter Amount"
						/>
						<Form.Label className="mt-2 d-flex">
							Description
						</Form.Label>
						<Form.Control
							name="desc"
							type="text"
							value={inputData.description}
							onChange={handleChange}
							placeholder="Enter short description"
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

export default AddTransacation;
