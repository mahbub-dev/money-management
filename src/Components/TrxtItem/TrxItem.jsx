import React from "react";
import Table from "react-bootstrap/Table";
import "./TrxItem.scss";

const TrxItem = () => {
	return (
		<Table striped bordered hover className="text-start" variant="dark">
			<thead>
				<tr>
					<th>CLIENT NAME</th>
					<th>TYPE</th>
					<th>AMOUNT</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<img
							className="me-2 "
							width="30px"
							height="30px"
							src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
							alt="client"
						/>{" "}
						Mahbub
					</td>
					<td>Mobile</td>
					<td>$420</td>
					<td>14 Apr 2022</td>
				</tr>
				<tr>
					<td>
						<img
							className="me-2 "
							width="30px"
							height="30px"
							src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
							alt="client"
						/>{" "}
						Mahbub
					</td>
					<td>Mobile</td>
					<td>$420</td>
					<td>14 Apr 2022</td>
				</tr>
				<tr>
					<td>
						<img
							className="me-2 "
							width="30px"
							height="30px"
							src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
							alt="client"
						/>{" "}
						Mahbub
					</td>
					<td>Mobile</td>
					<td>$420</td>
					<td>14 Apr 2022</td>
				</tr>
				<tr>
					<td>
						<img
							className="me-2 "
							width="30px"
							height="30px"
							src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
							alt="client"
						/>{" "}
						Mahbub
					</td>
					<td>Mobile</td>
					<td>$420</td>
					<td>14 Apr 2022</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default TrxItem;
