import React from "react";
import PropTypes from "prop-types";

const CardMat = ({ title, img }) => (
  <div>
    <div className="card-body" style={{maxWidth: '20rem'}}>
      <img src={img} className="rounded-circle" style={{maxWidth:'200px', marginLeft:'auto', marginRight:'auto',display:'block'}} />
      <h4 className="text-center">{title}</h4>
    </div>
  </div>
);

CardMat.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string
};

CardMat.defaultProps = {
  title: ``,
  img: ``
};

export default CardMat;
