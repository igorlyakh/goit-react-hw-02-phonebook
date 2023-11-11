import { Component } from 'react';
import { nanoid } from 'nanoid';
import AddContactForm from './AddContactForm';
import ContactsList from './ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onNameSubmit = person => {
    const checkContact = this.state.contacts.some(
      contact => contact.name === person.name
    );
    if (checkContact) {
      alert(`${person.name} is already in contacts.`);
      return;
    }
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { ...person, id: nanoid() }],
      };
    });
  };

  onDelete = id => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  onFilter = value => {
    this.setState({
      filter: value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
    return (
      <>
        <h1>Phonebook</h1>
        <AddContactForm onNameSubmit={this.onNameSubmit} />
        {contacts.length > 0 && (
          <ContactsList
            contacts={visibleContacts}
            onDelete={this.onDelete}
            contactFilter={filter}
            onFilter={this.onFilter}
          />
        )}
      </>
    );
  }
}
