import PropTypes from 'prop-types';
import Contact from '../Contact';
import s from './ContactList.module.css';

export default function ContactList({ filteredName, deleteContact }) {
  return (
    <ul>
      {filteredName.map(({ id, name, number }) => (
        <li className={s.contact} key={id}>
          <Contact name={name} number={number} />
          <button className={s.button} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  filteredName: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
