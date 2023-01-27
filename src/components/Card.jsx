import React from "react";
import PropTypes from "prop-types";

const Card = ({ urlImg }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={urlImg} className="card-img-top" alt="Imagen.png" />
      {console.log(`el enlace es: ${urlImg}`)}
    </div>
  );
};

Card.propTypes = {
  urlImg: PropTypes.string,
};

export default Card;
