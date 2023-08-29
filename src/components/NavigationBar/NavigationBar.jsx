import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCheckAuth from 'hooks/useCheckAuth';
import { refreshUserThunk } from 'redux/authentication/operations';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import css from './NavigationBar.module.css';

const NavigationBar = () => {
  const { authentificated, handleLogOut, userData, token, dispatch } =
    useCheckAuth();

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  return (
    <Navbar
      className={css.navBar}
      expand="xl"
      bg="secondary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Phonebook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {authentificated ? (
              <>
                <Nav.Link as={Link} to="/contacts">
                  Contacts
                </Nav.Link>
                <Button
                  className={css.navBarBtn}
                  type="button"
                  variant="outline-warning"
                  size="sm"
                  onClick={handleLogOut}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
          {authentificated && (
            <Navbar.Text className={css.navBarText}>
              Logged in as{' '}
              <span className={css.userTextColor}>{userData.name}</span> ||{' '}
              <span className={css.userTextColor}>{userData.email}</span>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
