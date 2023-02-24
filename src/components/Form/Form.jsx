import './Form.css';

export default function Form({ name, handleNameChange, onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="name" className="form__name-label">
        Name
      </label>
      <input
        type="text"
        className="form__name-input"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
      <button className="form__submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
