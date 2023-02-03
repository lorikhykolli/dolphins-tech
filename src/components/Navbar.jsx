import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Dolphins from "../images/logo.png";

const Lorik = () => { 
    return ( <div>
    <div class="navbar1">
<Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand><img src={Dolphins} alt="dolphins" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Ballina</Nav.Link>
            <Nav.Link href="#link">Sherbimet</Nav.Link>
            <Nav.Link href="#home">Shembuj per WEB</Nav.Link>
            <Nav.Link href="#link">Softuer dhe DB</Nav.Link>
            <Nav.Link href="#home">NFC</Nav.Link>
            <Nav.Link href="#link">Kontakti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
    );
} 

export default Lorik;