import React from "react";

const Footer = () => {
  return (
    <nav className="navbar bg-dark mt-4" data-bs-theme="dark">
      <div className="container-fluid px-4">
        <span className="navbar-brand mb-0 h1 w-100 text-center" href="#">
          Rusbell Ruiz P - &copy; {new Date().getFullYear()}
        </span>
      </div>
    </nav>
  );
};

export default Footer;
