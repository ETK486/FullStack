import React from 'react';
import ContactItem from './ContactItem';
import './ContactList.css';

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  return (
    <div className="contact-list">
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
