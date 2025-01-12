import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const [RegisterEnabled, setRegisterEnabled] = useState(false);

  // Validate if all fields are properly filled and meet criteria
  const validateForm = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return (
      username.length > 5 &&
      password.length >= 6 &&
      regex.test(email)
    );
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
    setRegisterEnabled(validateForm());
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setRegisterEnabled(validateForm());
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setRegisterEnabled(validateForm());
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:8082/auth/register", data);
      setUsername("");
      setEmail("");
      setPassword("");
      setIsRegistered(true);
    } catch (error) {
      setError("The email or username you entered is already registered");
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0" style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand as={Link} to={"/"}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/workerregister"}>Register</Nav.Link>
            <Nav.Link as={Link} to={"/workerlogin"}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        {isRegistered ? (
          <div className="custom-container shadow-sm rounded text-center">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h1 className="mb-3">You are registered</h1>
              <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: "3rem", color: "green" }} />
            </div>
          </div>
        ) : (
          <div className="custom-container shadow-sm rounded">
            <h1 className="mb-3 text-center">Registration</h1>
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  value={username}
                  type="text"
                  placeholder="Enter User name"
                  onChange={handleUsername}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Enter Email address"
                  onChange={handleEmail}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  type="password"
                  placeholder="Enter password"
                  onChange={handlePassword}
                />
              </Form.Group>
              {error && <div className="text-danger mb-3">{error}</div>}
              <Button
                className="mt-2"
                variant="primary"
                type="submit"
                disabled={!RegisterEnabled}
              >
                Submit
              </Button>
            </Form>
          </div>
        )}
      </Container>
    </>
  );
};

export default Register;
