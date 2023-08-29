import React from 'react';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useRegisterUser from 'hooks/useRegisterUser';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const { authenticated, handleSubmit } = useRegisterUser();

  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <section className={css.registerSection}>
      <div className={css.container}>
        <h1>Register Your Account</h1>
        <Form onSubmit={handleSubmit} className={css.form}>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label className={css.formLabel}>Name</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              placeholder="Enter name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              minLength={2}
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="userEmail">
            <Form.Label className={css.formLabel}>Email</Form.Label>
            <Form.Control
              type="email"
              name="userEmail"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="userPassword">
            <Form.Label className={css.formLabel}>Password</Form.Label>
            <Form.Control
              type="password"
              name="userPassword"
              placeholder="Enter password"
              minLength={7}
              required
            />
          </Form.Group>
          <Button
            className={css.registerFormBtn}
            variant="outline-warning"
            type="submit"
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default RegisterForm;
