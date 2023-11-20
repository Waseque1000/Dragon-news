import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-3 mb-3">
        <img src={logo} alt="" />
        <p className="mt-2">Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button> {/*  ? marquee  */}
        <Marquee className="text-danger" speed={50}>
          I can be a React component, multiple React components, or just some
          text.... Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Velit, rem!... Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Explicabo consequuntur tempore impedit architecto praesentium
          consequatur nam mollitia aperiam reprehenderit perferendis.
        </Marquee>
      </div>
      {/*  Navbar  */}
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-3">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home </Nav.Link>
              <Nav.Link href="#pricing">About </Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Button variant="success">Log in</Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
