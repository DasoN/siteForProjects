import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function(){
    return (
        <Navbar bg="success" expand="lg">
            <Navbar.Brand className="text-white" href="/"><h1>DasoN</h1></Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link font-weight-bold text-white" to="/">Home</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}