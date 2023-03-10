import React from "react";

const FormInput = ({ submit }) => {
  return (
    <form className="d-flex" role="search" onSubmit={submit}>
      <input
        id="inputUser"
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default FormInput;
