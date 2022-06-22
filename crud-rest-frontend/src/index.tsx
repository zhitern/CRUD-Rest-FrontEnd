import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import MainPage from './Pages/MainPage';
import AddEmployeePage from './Pages/AddEmployeePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="AddEmployee" element={<AddEmployeePage />} />
      <Route path="AddEmployee/:id" element={<AddEmployeePage />} />
    </Routes>
  </BrowserRouter>
);