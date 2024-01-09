// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function ContactItemImage({ ImageUrl }) {
  return (
    <div className="contact-item__image">
      <img src={ImageUrl} alt="contact avatar" />
    </div>
  );
}

ContactItemImage.propTypes = {
  ImageUrl: PropTypes.string.isRequired,
};

export default ContactItemImage;
