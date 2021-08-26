import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './contactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.propOnSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label className={style.label}>
          {' '}
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            placeholder="Name"
          />
        </label>
        <label className={style.label}>
          {' '}
          Number
          <input
            className={style.input}
            type="text"
            name="number"
            onChange={this.handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            placeholder="Phone"
          />
        </label>

        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
