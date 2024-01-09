// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function ContactItemImage({ imageUrl }) {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}

ContactItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ContactItemImage;
