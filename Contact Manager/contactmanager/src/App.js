import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('/contacts')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the contacts!', error);
      });
  }, []);

  const addContact = (contact) => {
    axios.post('/contacts', contact)
      .then(response => {
        setContacts([...contacts, response.data]);
      })
      .catch(error => {
        console.error('There was an error adding the contact!', error);
      });
  };
  

  const updateContact = (id, updatedContact) => {
    axios.put(`/contacts/${id}`, updatedContact)
      .then(response => {
        const updatedContacts = contacts.map(contact => {
          if (contact._id === id) {
            return response.data; // Replace the old contact with the updated one
          }
          return contact;
        });
        setContacts(updatedContacts);
      })
      .catch(error => {
        console.error('Error updating contact:', error);
      });
  };
  

  const deleteContact = (id) => {
    axios.delete(`/contacts/${id}`)
      .then(() => {
        setContacts(contacts.filter(contact => contact._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the contact!', error);
      });
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} updateContact={updateContact} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
