import React from "react";
import FormInput from "./FormInput";
import "../stylesheets/Header.css";

const Header = ({ handleSubmit, init }) => {
  return (
    <nav
      className="navbar bg-dark fixed-top position-relative"
      data-bs-theme="dark"
    >
      <div className="container-fluid px-4">
        <span onClick={init} className="navbar-brand">
          Gallery Rusbell
        </span>
        <FormInput submit={handleSubmit} />
      </div>
    </nav>
  );
};

export default Header;
