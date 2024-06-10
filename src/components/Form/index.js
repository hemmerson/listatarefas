import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        onChange={handleChange}
        value={novaTarefa}
      />
      <button type="submit" aria-label="plus">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
