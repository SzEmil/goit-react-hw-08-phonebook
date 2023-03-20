import React from 'react';
import clsx from 'clsx';
import css from './ContactList.module.css';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectFilterContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);

  const memoContacts = useMemo(() => contacts, [contacts]);

  return (
    <ul className={clsx(css.contactList)}>
      {memoContacts.map(contact => (
        <Contact contact={contact} />
      ))}
    </ul>
  );
};

