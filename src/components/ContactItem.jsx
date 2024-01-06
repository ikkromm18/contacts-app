// eslint-disable-next-line no-unused-vars
import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";

// eslint-disable-next-line react/prop-types
function ContactItem({ ImageUrl, name, tag, id, onDelete }) {
  return (
    <div className="contact-item">
      <ContactItemImage ImageUrl={ImageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
