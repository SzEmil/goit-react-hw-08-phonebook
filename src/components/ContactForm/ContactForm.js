import React from 'react';
import clsx from 'clsx';
import css from './ContactForm.module.css';
import { addContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  function handleFormatPhoneNumber(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
      return phoneNumber;
    }

    var formattedNumber = '';

    for (var i = 0; i < phoneNumber.length; i++) {
      if (i !== 0 && i % 3 === 0) {
        formattedNumber += '-';
      }

      formattedNumber += phoneNumber[i];
    }

    return formattedNumber;
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const phone = form.number.value;

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} already in contacts!`);
      return;
    }
    const user = {
      name,
      phone: handleFormatPhoneNumber(phone),
    };
    dispatch(addContact(user));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={clsx(css.contactForm)}>
        <label className={clsx(css.labelForm)}>
          Name
          <input
            className={clsx(css.inputContact)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={clsx(css.labelForm)}>
          Number
          <input
            className={clsx(css.inputContact)}
            type="tel"
            name="number"
            pattern="\d{1,4}?\d{1,3}?\d{1,4}\d{1,4}\d{1,9}"
            title="Phone number must be digits"
            maxLength={11}
            required
          />
        </label>
        <button className={clsx(css.buttonForm)}>Add contact</button>
      </form>
    </>
  );
};
