// Depencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Index.css';

// Pages
import Principal from './Pages/Principal';
import LoginRegistro from './Pages/LoginRegistro';

// Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Principal />
  },
  {
    path: '/registrar',
    element: <LoginRegistro form="registrar" />
  },
  {
    path: '/entrar',
    element: <LoginRegistro form="entrar" />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
