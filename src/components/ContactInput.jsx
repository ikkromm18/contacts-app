import React from "react";
import PropTypes from "prop-types";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: "",
      tag: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        nama: event.target.value,
      };
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="nama"
          value={this.state.nama}
          onChange={this.onNameChangeEventHandler}
        />
        <input
          type="text"
          placeholder="tag"
          value={this.state.tag}
          onChange={this.onTagChangeEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInput;
