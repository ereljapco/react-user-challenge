import './User.css';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash-can-solid.svg';

export default function User({ id, name, deleteUser }) {
  return (
    <li className="users__item">
      {name}
      <button className="users__delete-btn" onClick={() => deleteUser(id)}>
        <TrashIcon className="users__delete-icon" />
      </button>
    </li>
  );
}
