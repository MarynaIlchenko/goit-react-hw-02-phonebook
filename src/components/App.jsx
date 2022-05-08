import { render } from '@testing-library/react';
import React, { Component } from 'react';
import InputForm from './InputForm/InputForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          padding: '100px',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <InputForm />
        <h2>Contacts</h2>
      </div>
    );
  }
}
