import React, { useState } from 'react';
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';

import SignIn from "./Login/SignIn";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Perform logout actions
    setIsLoggedIn(false);
  };

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary py-3"
    >
      <Container className="px-0 me-auto">
        <Navbar.Brand href="/" className="fs-3 px-0 mx-0">
        <FontAwesomeIcon icon={faHandFist} className="mx-3 text-danger" size="lg"/>
          FIND MY PROTEST
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <span className="me-auto">
          </span>
          <Nav>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav>
          <Nav>
            <SignIn className="me-auto" onSignIn={() => setIsLoggedIn(true)}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;