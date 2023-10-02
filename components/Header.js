import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS here

const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">
					<Image
						className={styles.icon}
						src="/jsMiniGames.png" // Route of the image file
						style={{ margin: "0 auto", textAlign: "center" }}
						height={55} // Desired size with correct aspect ratio
						width={55} // Desired size with correct aspect ratio
						alt="JS Mini Games"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<NavDropdown title="Games" id="basic-nav-dropdown">
							<NavDropdown.Item href="games/snake">Snake</NavDropdown.Item>
							{/* <NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item> */}
						</NavDropdown>
						<Nav.Link href="blog">Blog</Nav.Link>
						<Nav.Link href="about">About</Nav.Link>
					</Nav>
					<Nav className={`ms-auto`}>
						<Nav.Link
							className={`btn btn-primary ${styles.login}`}
							href="login"
						>
							Log In
						</Nav.Link>
						<Nav.Link
							className={`btn btn-secondary ${styles.login}`}
							href="signup"
						>
							Sign Up
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
