import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // console.log(createUser);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(email, password);
  };
  return (
    <Container>
      <Form onSubmit={handleRegister} className="mx-auto w-50 ">
        <h1>Please Register</h1>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="text-danger"
            type="checkbox"
            name="accept"
            label=" Accept Terms Conditions"
          />
        </Form.Group>
        <Button variant="success  " type="submit">
          Register
        </Button>
        <p className="fs-4 ">
          {" "}
          Already have an account ?<Link to={"/login"}>Log In</Link>
        </p>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
