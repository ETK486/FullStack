import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  return (
    <div>
      {contacts.map(contact => (
        <ContactItem
          key={contact._id}
          contact={contact}
          updateContact={updateContact}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
