import React from "react";
import FormInput from "./FormInput";

const Header = ({ handleSubmit, inicio }) => {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid px-4">
        <a className="navbar-brand">Gallery Rusbell</a>
        <FormInput submit={handleSubmit} />
      </div>
    </nav>
  );
};

export default Header;
