import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loader from 'components/Loader/Loader';
import { selectAuthentificated } from 'redux/authentication/selectors';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectUserContacts,
} from 'redux/contacts/selectors';
import {
  addContactThunk,
  deleteContactThunk,
  requestContactsThunk,
} from 'redux/contacts/operations';
import css from './ContactsPage.module.css';

const Contacts = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);

    dispatch(addContactThunk({ name, number }));
    form.reset();
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <section>
      <Form onSubmit={handleSubmit} className={css.form}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className={css.formLabel}>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label className={css.formLabel}>Number</Form.Label>
          <Form.Control
            type="text"
            name="number"
            placeholder="Enter number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            required
          />
        </Form.Group>
        <Button variant="outline-warning" type="submit">
          Submit
        </Button>
      </Form>

      {isLoading && <Loader />}
      {error && <p>Oops, some error occured... {error}</p>}
      <ul>
        {showContacts &&
          contacts.map(contact => {
            return (
              <li key={contact.id}>
                <h3>Name: {contact.name}</h3>
                <p>Number: {contact.number}</p>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  type="button"
                  aria-label="Delete contact"
                >
                  &times;
                </button>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Contacts;
