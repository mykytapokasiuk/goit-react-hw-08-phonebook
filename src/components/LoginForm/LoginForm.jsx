import React from 'react';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import css from './LoginForm.module.css';
import useLoginUser from 'hooks/useLoginUser';

const LoginForm = () => {
  const { authenticated, handleSubmit } = useLoginUser();
  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <section className={css.loginSection}>
      <div className={css.container}>
        <h1>Login Into Your Account</h1>
        <Form onSubmit={handleSubmit} className={css.form}>
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
            className={css.logInFormBtn}
            variant="outline-warning"
            type="submit"
          >
            Sign In
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default LoginForm;
