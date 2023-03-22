import clsx from 'clsx';
import css from './Contact.module.css';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li
      className={clsx(css.contactListItem)}
      key={contact.id}
      name={contact.name}
    >
      <span>
        {contact.name}: {contact.number}
      </span>
      <button className={clsx(css.contactListBtn)} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
