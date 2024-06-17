import React, { useState } from 'react';
import axios from 'axios';

const ContactItem = ({ contact, updateContact, deleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContact, setUpdatedContact] = useState(contact);

  const onChange = (e) => {
    setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    axios.put(`http://localhost:5000/contacts/${contact._id}`, updatedContact)
      .then(response => {
        updateContact(response.data);
        setIsEditing(false);
      });
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input name="name" value={updatedContact.name} onChange={onChange} />
          <input name="email" value={updatedContact.email} onChange={onChange} />
          <input name="phone" value={updatedContact.phone} onChange={onChange} />
          <button onClick={onSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteContact(contact._id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ContactItem;
