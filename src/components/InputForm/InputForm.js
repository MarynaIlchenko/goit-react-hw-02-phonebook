import React, { Component } from 'react';
import propTypes from 'prop-types';
import style from './InputForm.module.css';
import { nanoid } from 'nanoid';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    });
    this.reset(e);
  };

  reset = e => {
    this.setState({ name: '', number: '' });
    e.currentTarget.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmitForm}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            value={name}
            type="text"
            name="name"
            required
            onChange={this.onChangeInput}
          />
        </label>

        <label className={style.label}>
          Number
          <input
            className={style.input}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChangeInput}
          />
        </label>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

InputForm.propTypes = {
  onSubmit: propTypes.func,
};

export default InputForm;
