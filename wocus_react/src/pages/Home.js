import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  const styles = {
    page: {
      backgroundColor: "#f8f9fa", // Light gray
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      backgroundColor: "#ffffff", // White
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "300px",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#343a40", // Dark gray
      marginBottom: "20px",
    },
    button: {
      width: "100%",
      marginBottom: "10px",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
    },
    customerButton: {
      backgroundColor: "#6c757d", // Medium gray
      color: "#ffffff",
    },
    workerButton: {
      backgroundColor: "#343a40", // Darker gray
      color: "#ffffff",
    },
    footer: {
      marginTop: "15px",
      fontSize: "0.9rem",
      color: "#6c757d",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.title}>Wocus</div>
        <Button
          as={Link}
          to="/layout1"
          style={{ ...styles.button, ...styles.customerButton }}
        >
          Customer Login
        </Button>
        <Button
          as={Link}
          to="/layout"
          style={{ ...styles.button, ...styles.workerButton }}
        >
          Worker Login
        </Button>
        <div style={styles.footer}>
          Select an option to proceed
        </div>
      </div>
    </div>
  );
};

export default HomePage;