import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAddContact from 'hooks/useAddContact';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const { handleSubmit } = useAddContact();

  return (
    <div className={css.container}>
      <h1>Add New Contact</h1>
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
        <Button
          className={css.contactFormBtn}
          variant="outline-warning"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
