import ListElement from 'components/ListElement';
import React from 'react';
import { Wrapper } from './ContactsList.styled';

const ContactsList = ({ contacts }) => {
  return (
    <Wrapper>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => {
          return <ListElement name={contact.name} phone={contact.phone} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default ContactsList;
