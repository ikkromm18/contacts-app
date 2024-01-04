// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function ContactItemImage({ ImageUrl }) {
  return (
    <div className="contact-item__image">
      <img src={ImageUrl} alt="contact avatar" />
    </div>
  );
}

export default ContactItemImage;
