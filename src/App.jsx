import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import usersList from './data/users';

export default function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(usersList);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const id = users.length + 1;

    setUsers([...users, { id: id, name: name }]);
    setName('');
  }

  return (
    <section className="add-user">
      <h1 className="add-user__title">Add User</h1>
      <Form
        name={name}
        handleNameChange={handleNameChange}
        onSubmit={onSubmit}
      />
      <List users={users} />
    </section>
  );
}
