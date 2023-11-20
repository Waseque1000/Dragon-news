import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaBeer,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mb-2">LogIn With </h4>
      <Button className="mb-1" variant="outline-primary">
        <FaGoogle /> Login with Google{" "}
      </Button>{" "}
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>{" "}
      <div className="mt-5 mb-2">
        <h4>Find Us On </h4>
        <ListGroup>
          <ListGroup.Item className="p-3">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            <FaInstagram />
            Instragram
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            <FaYoutube /> Youtube
          </ListGroup.Item>
        </ListGroup>
      </div>
      {/*  Qzone... */}
      <QZone></QZone>
      {/* bg added new  */}
      <img src={bg} alt="" />
    </div>
  );
};

export default RightNav;
