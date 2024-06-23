import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import './App.css'; // Import CSS file

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/contacts')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the contacts!', error);
      });
  }, []);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (updatedContact) => {
    const updatedContacts = contacts.map(contact => {
      if (contact._id === updatedContact._id) {
        return updatedContact; // Replace the old contact with the updated one
      }
      return contact;
    });
    setContacts(updatedContacts);
  };

  const deleteContact = (id) => {
    axios.delete(`http://localhost:5000/contacts/${id}`)
      .then(() => {
        setContacts(contacts.filter(contact => contact._id !== id));
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
      });
  };
  

  return (
    <div>
      <h1 id="heading">Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} updateContact={updateContact} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
