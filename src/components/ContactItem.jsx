// eslint-disable-next-line no-unused-vars
import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

// eslint-disable-next-line react/prop-types
function ContactItem({ ImageUrl, name, tag }) {
  return (
    <div className="contact-item">
      <ContactItemImage ImageUrl={ImageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
}

export default ContactItem;
