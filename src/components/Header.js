import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

export class Header extends React.Component {

        render() {

        return (
            <Navbar bg="light" expand="md">
            <Navbar.Brand href="/home">JUAL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/sell">Sell Item</NavDropdown.Item>
                        <NavDropdown.Item href="/buy">Buy Item</NavDropdown.Item>
                        <NavDropdown.Item href="/manage">Manage Item</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/support">Support</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
                <Button variant="primary" href="/login">Login</Button>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}