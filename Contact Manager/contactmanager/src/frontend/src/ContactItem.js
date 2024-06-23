import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file

const ContactItem = ({ contact, updateContact, deleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContact, setUpdatedContact] = useState({ ...contact });

  const onChange = (e) => {
    setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    axios.put(`http://localhost:5000/contacts/${contact._id}`, updatedContact)
      .then(response => {
        updateContact(response.data); // Pass the updated contact data to parent component
        setIsEditing(false); // Disable editing mode
      })
      .catch(error => {
        console.error('Error updating contact:', error);
      });
  };

  return (
    <div className="contact-item">
      {isEditing ? (
        <div>
          <input name="name" value={updatedContact.name} onChange={onChange} />
          <input name="email" value={updatedContact.email} onChange={onChange} />
          <input name="phone" value={updatedContact.phone} onChange={onChange} />
          <button onClick={onSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>Name: {contact.name}</span>
          <span>Email: {contact.email}</span>
          <span>Phone: {contact.phone}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteContact(contact._id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ContactItem;
