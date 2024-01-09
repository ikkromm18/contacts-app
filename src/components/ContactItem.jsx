// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
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

ContactItem.propTypes = {
  ImageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
