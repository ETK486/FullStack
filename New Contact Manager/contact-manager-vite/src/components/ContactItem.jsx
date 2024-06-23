import React, { useState } from 'react';
import './ContactItem.css';

const ContactItem = ({ contact, updateContact, deleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContact, setUpdatedContact] = useState(contact);

  const onChange = (e) => {
    setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    updateContact(contact._id, updatedContact);
    setIsEditing(false);
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
          <table>
            <tbody>
                <tr>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td><button onClick={() => setIsEditing(true)}>Edit</button></td>
                <td><button onClick={() => deleteContact(contact._id)}>Delete</button></td>
            </tr>
        </tbody>
        </table>
    </div>
      )}
    </div>
  );
};

export default ContactItem;
