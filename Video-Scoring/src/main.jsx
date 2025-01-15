import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import HomePage from './components/Home.jsx';
import InputForm from './components/InputForm.jsx';
import Catalogue from './components/Catalogue.jsx';


const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/input-form",
    element: <InputForm />,
  },
  {
    path: "/dashboard/:id",
    element: <Dashboard />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

