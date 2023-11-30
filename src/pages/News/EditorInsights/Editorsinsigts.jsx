import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import secound from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { FaToolbox } from "react-icons/fa";
import moment from "moment";

const Editorsinsigts = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <div className="d-flex justify-content-between">
              {" "}
              <FaToolbox />
              <p>{moment().format("dddd, yyy, MMM  h:mm")}</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={secound} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <div className="d-flex justify-content-between">
              {" "}
              <FaToolbox />
              <p>{moment().format("dddd, yyy, MMM  h:mm")}</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <div className="d-flex justify-content-between">
              {" "}
              <FaToolbox />
              <p>{moment().format("dddd, yyy, MMM  h:mm")}</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Editorsinsigts;
