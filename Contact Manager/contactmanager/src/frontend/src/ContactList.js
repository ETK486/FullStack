import React from 'react';
import ContactItem from './ContactItem';
import './App.css'; // Import CSS file

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <ContactItem
          key={contact._id}
          contact={contact}
          updateContact={updateContact} // Pass update function to ContactItem
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
