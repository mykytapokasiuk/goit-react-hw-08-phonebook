import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authentication/selectors';
import { requestContactsThunk } from 'redux/contacts/operations';
import useShowContacts from 'hooks/useShowContacts.js';
import css from './ContactList.module.css';

const ContactList = () => {
  const { handleDeleteContact, contacts } = useShowContacts();
  const authentificated = useSelector(selectAuthentificated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    showContacts && (
      <div className={css.container}>
        <ul className={css.contactList}>
          {contacts.map(contact => {
            return (
              <li key={contact.id} className={css.listItem}>
                {contact.name}: {contact.number}
                <button
                  className={css.listItemBtn}
                  onClick={() => handleDeleteContact(contact.id)}
                  type="button"
                  aria-label="Delete contact"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default ContactList;
