import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, email, phone };
    addContact(newContact);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
