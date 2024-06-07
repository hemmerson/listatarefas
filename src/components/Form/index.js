import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form() {
  return (
    <form action="#" className="form" onSubmit={this.handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        onChange={this.handleChange}
        value={novaTarefa}
      />
      <button type="submit" aria-label="plus">
        <FaPlus />
      </button>
    </form>
  );
}
