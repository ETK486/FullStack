import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, age };
    setUsers([...users, newUser]);
    setName('');
    setAge('');
  };

  const getUserDetails = () => {
    const searchName = document.getElementById('searchName').value;
    const user = users.find(user => user.name === searchName);
    if (user) {
      alert(`User Found!\nName: ${user.name}\nAge: ${user.age}`);
    } else {
      alert(`User with name '${searchName}' not found.`);
    }
  };

  return (
    <div>
      <h1>User Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>
        <h2>Retrieve User Details</h2>
        <label>
          Enter Name:
          <input type="text" id="searchName" />
        </label>
        <button onClick={getUserDetails}>Retrieve Details</button>
      </div>
    </div>
  );
}

export default App;
