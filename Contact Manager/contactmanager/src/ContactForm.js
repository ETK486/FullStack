import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, email, phone };
    axios.post('http://localhost:5000/contacts', newContact)
      .then(response => {
        addContact(response.data);
        setName('');
        setEmail('');
        setPhone('');
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
