import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Button, Col, Form, Row, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:8081/auth/login1", data);
      setError("");
      setUsername("");
      setPassword("");

      // Storing response data in sessionStorage
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("username", response.data.username);
      sessionStorage.setItem("user_id", response.data.id);

      // Set Authorization header globally for all subsequent requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      
      // Redirect to home page
      navigate("/customerdashboard");
    } catch (error) {
      setError("Username or password is incorrect");
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0" style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/customerregister"}>
              Register
            </Nav.Link>
            <Nav.Link as={Link} to={"/customerlogin"}>
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <div className="custom-container shadow-sm rounded">
          <h1 className="mb-4 text-center">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-4" controlId="username">
              <Form.Label column sm="2">
                Username
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={handleUsername}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="password">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={handlePassword}
                />
              </Col>
            </Form.Group>

            {error && <div className="text-danger mb-3">{error}</div>}

            <div className="d-flex justify-content-end">
              <Button className="mt-2" variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
