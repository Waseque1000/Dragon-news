import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUser } from "react-icons/fa";
import NavigationBar from "../Navigation/NavigationBar";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-3 mb-3">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

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
    </Container>
  );
};

export default Header;
