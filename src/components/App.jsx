import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import NavigationBar from './NavigationBar/NavigationBar.jsx';
import Loader from './Loader/Loader.js';
import css from './App.module.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage.jsx'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage.jsx'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage.jsx'));

const App = () => {
  return (
    <div className={css.container}>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
