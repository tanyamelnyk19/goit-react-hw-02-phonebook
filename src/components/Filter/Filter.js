import PropTypes from 'prop-types';
import s from './Filter.module.css';
export default function Filter({ filter, handleFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={handleFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
