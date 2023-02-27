import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import usersList from './data/users';
import { v4 as uuid } from 'uuid';

export default function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(usersList);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newUser = { id: uuid(), name: name };
    const newUserList = [...users, newUser];

    setUsers(newUserList);
    setName('');
  }

  function deleteUser(id) {
    const newUserList = users.filter((user) => user.id != id);

    setUsers([...newUserList]);
  }

  return (
    <section className="add-user">
      <h1 className="add-user__title">Add User</h1>
      <Form
        name={name}
        handleNameChange={handleNameChange}
        onSubmit={onSubmit}
      />
      <List users={users} deleteUser={deleteUser} />
    </section>
  );
}
