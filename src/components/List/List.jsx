import User from '../User/User';
import './List.css';

export default function List({ users, deleteUser }) {
  return (
    <ul className="users__list">
      {users.map((user) => {
        return <User key={user.id} {...user} deleteUser={deleteUser} />;
      })}
    </ul>
  );
}
