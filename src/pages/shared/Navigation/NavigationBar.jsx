import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-3">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className=" me-2" to={"/"}>
                Home
              </Link>
              <Link className="me-3">About</Link>
              <Link>Career</Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  <FaUser className=" fs-4"></FaUser>
                </Nav.Link>
              )}

              {user ? (
                <Button onClick={handleLogout} variant="success">
                  Log Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="success">Log in</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
