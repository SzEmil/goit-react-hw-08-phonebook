import React from 'react';
// import { ColorRing } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Contacts } from 'pages/Contacts/Contacts';
// import { Home } from 'pages/Home/Home';
// import { Login } from 'pages/Login/Login';
// import { Register } from 'pages/Register/Register';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>

    </>
  );
};
