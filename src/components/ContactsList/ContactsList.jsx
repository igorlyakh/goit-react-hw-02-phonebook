import ListElement from 'components/ListElement';
import React from 'react';
import { List, Wrapper } from './ContactsList.styled';
import FilterField from 'components/FilterField';

const ContactsList = ({ contacts, onDelete, contactFilter, onFilter }) => {
  return (
    <Wrapper>
      <h2>Contacts</h2>
      <FilterField contactFilter={contactFilter} onFilter={onFilter} />
      <List>
        {contacts.map(contact => {
          return (
            <ListElement
              name={contact.name}
              phone={contact.phone}
              id={contact.id}
              onDelete={onDelete}
              key={contact.id}
            />
          );
        })}
      </List>
    </Wrapper>
  );
};

export default ContactsList;
