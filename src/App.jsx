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

    setUsers([...users, { id: uuid(), name: name }]);
    setName('');
  }

  function deleteUser(e) {
    const userId = e.currentTarget.parentElement.dataset['id'];
    const newUserList = users.filter((user) => user.id != userId);

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
