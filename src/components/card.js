import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, description, img }) => (
  <div className="card additional-card">
    <img src={img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};

Card.defaultProps = {
  title: ``,
  description: ``,
  img: ``
};

export default Card;
