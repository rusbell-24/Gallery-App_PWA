import React from "react";
import PropTypes from "prop-types";

const Card = ({ urlImg }) => {
  return (
    <div className=" gallery-item">
      <img src={urlImg} className="gallery-img" alt="Imagen.png" />
    </div>
  );
};

Card.propTypes = {
  urlImg: PropTypes.string,
};

export default Card;
