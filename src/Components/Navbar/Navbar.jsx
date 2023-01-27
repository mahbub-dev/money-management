import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import User from "../User/User";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navigationbar() {
	return (
		<>
			{["md"].map((expand) => (
				<Navbar
					key={expand}
					bg="dark"
					expand={expand}
					className="mb-3 container"
				>
					<Container fluid>
						<Navbar.Brand href="#" className="fs-4 text-white">
							{" "}
							<span style={{ color: "yellow" }}>F</span>inance
						</Navbar.Brand>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
							className="bg-white"
						/>
						<Navbar.Offcanvas
							className={"bg-dark"}
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton className="bg-white">
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									<span style={{ color: "blue" }}>F</span>
									<span className="text-dark">inance</span>
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body bg="dark">
								<Nav className="justify-content-center  flex-grow-1 pe-3">
									<Nav.Link href="" className="text-white">
										Dashboard
									</Nav.Link>
									<Nav.Link
										href="#action"
										className="text-white"
									>
										Transacations
									</Nav.Link>
									<Nav.Link
										href="#action"
										className="text-white"
									>
										Clients
									</Nav.Link>
									<Nav.Link
										href="#action"
										className="text-white"
									>
										Logout
									</Nav.Link>
								</Nav>
								<User user={''} />
								<Form className="d-flex">
									<Form.Control
										type="search"
										placeholder="Search"
										className="me-2"
										aria-label="Search"
									/>
									<Button variant="outline-success">
										Search
									</Button>
								</Form>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}

export default Navigationbar;
