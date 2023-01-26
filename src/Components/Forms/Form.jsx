import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import AddClients from "./AddClients/AddClients";
import AddTransacation from "./AddTransacation/AddTransacation";
function Forms() {
	const [addClientModalShow, setAddClientModalShow] = React.useState(false);
	const [addTransacationModalShow, setAddTransacationModalShow] =
		React.useState(false);
	return (
		<>
			<ButtonGroup size="lg" className="bg-dark text-white col-12 mb-2">
				<Button
					className="btn-dark"
					onClick={() => setAddClientModalShow(true)}
				>
					Add Clients
				</Button>
				<Button
					className="btn-dark"
					onClick={() => setAddTransacationModalShow(true)}
				>
					Add Transacation
				</Button>
			</ButtonGroup>

			<AddClients
				show={addClientModalShow}
				onHide={() => setAddClientModalShow(false)}
			/>
			<AddTransacation
				show={addTransacationModalShow}
				onHide={() => setAddTransacationModalShow(false)}
			/>
		</>
	);
}
export default Forms;
