import useCheckAuth from 'hooks/useCheckAuth';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import css from './NavigationBar.module.css';

const NavigationBar = () => {
  const { authentificated, handleLogOut, userData } = useCheckAuth();

  return (
    <Navbar expand="xl" bg="secondary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Phonebook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {authentificated ? (
              <>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
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
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
          <Navbar.Text>
            {/*Signed in as: {userData.name} | {userData.email}*/}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
