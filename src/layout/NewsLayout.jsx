import React from "react";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/shared/left-nev/LeftNav";
import RightNav from "../pages/shared/Right-Nav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col lg={9}>
            {" "}
            <Outlet />{" "}
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default NewsLayout;
