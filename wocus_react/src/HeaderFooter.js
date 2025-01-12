import React from "react";
import "./HeaderFooter.css";
import logo from "./c2w.png"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
      <img src={logo} alt="C2W Logo" />
        <nav className="nav">
          <a href="/home" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      
    </footer>
  );
};

const HeaderFooter = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default HeaderFooter;
