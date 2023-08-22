import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts/selectors';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  return (
    <section className={css.contactsSection}>
      <ContactForm />
      {isLoading && <Loader />}
      {error && <p>Oops, some error occured... {error}</p>}
      <ContactList />
    </section>
  );
};

export default ContactsPage;
