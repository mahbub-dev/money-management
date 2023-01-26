import React from "react";
import "./dashboard.scss";
import TrxItem from "../TrxtItem/TrxItem";
import AddClients from "../Forms/AddClients/AddClients";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AddTransacation from "../Forms/AddTransacation/AddTransacation";
import Navgationbar from "../Navbar/Navbar";
import Forms from "../Forms/Form";
const Dashboard = () => {
	return (
		<>
			<Navgationbar />
			<section className="container px-0">
				<Forms />
				<br />
			</section>

			<div className=" dashboard container text-white ">
				<div className="balances row ">
					<div className="banlace-box1 col-sm-3  rounded">
						<div className="balaces-ls">
							<img
								width="30px"
								src="https://cdn-icons-png.flaticon.com/512/9413/9413521.png"
								alt="cash"
							/>
						</div>
						<div className="balaces-rs">
							<h6>Total Balance</h6>
							<h3>$5000</h3>
						</div>
					</div>
					<div className="banlace-box2  col-sm-3 rounded">
						<div className="balaces-ls">
							<img
								src="https://cdn-icons-png.flaticon.com/512/3886/3886981.png"
								width={"30px"}
								alt="expense"
							/>
						</div>
						<div className="balaces-rs">
							<h6>Total Spended</h6>
							<h3>$201.25</h3>
						</div>
					</div>
					<div className="banlace-box3 col-sm-3   rounded">
						<div className="balaces-ls">
							<img
								src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
								width={"30px"}
								alt="saved"
							/>
						</div>
						<div div className="balaces-rs">
							<h6>Total Saved</h6>
							<h3>$4000</h3>
						</div>
					</div>
				</div>

				<section className="recent-trx">
					<div className="section-header d-flex justify-content-between">
						<h3>Recent Transacation</h3>
						<button className="view-all-btn btn text-warning">
							View All &gt;
						</button>
					</div>
					<div className="transaction-history">
						<TrxItem />
					</div>
				</section>
			</div>
		</>
	);
};

export default Dashboard;
