import { Component } from 'react';
import { nanoid } from 'nanoid';
import AddContactForm from './AddContactForm';
import ContactsList from './ContactsList';

export class App extends Component {
  state = {
    contacts: [],
  };

  onNameSubmit = person => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { ...person, id: nanoid() }],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <AddContactForm onNameSubmit={this.onNameSubmit} />
        <ContactsList contacts={contacts} />
      </>
    );
  }
}
