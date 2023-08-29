import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useCheckAuth from 'hooks/useCheckAuth';
import css from './HomePage.module.css';
import noteBook from '../../img/notebook.jpg';

const HomePage = () => {
  const { authentificated, userData } = useCheckAuth();
  return (
    <section className={css.homeSection}>
      <div className={css.container}>
        {authentificated ? (
          <Card className={css.cardContainer}>
            <Card.Img variant="top" src={noteBook} />
            <Card.Body className={css.cardBody}>
              <Card.Title>
                Hello,{' '}
                <span className={css.userTextColor}>{userData.name}</span>!
              </Card.Title>
              <Card.Text>
                Phonebook allows you to add, delete, and update your contacts.
                Enjoy!
              </Card.Text>
              <Button
                className={css.cardBtn}
                as={Link}
                to="/contacts"
                type="button"
                size="sm"
                variant="outline-warning"
              >
                Contacts
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <div className={css.welcomeContainer}>
            <h1>Welcome, guest!</h1>
            <p>If you want to use this app - please, register your account.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
