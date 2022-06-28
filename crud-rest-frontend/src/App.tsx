import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useAppSelector } from './store/hooks';

import './index.css';
import MainPage from './Pages/MainPage';
import AddEmployeePage from './Pages/AddEmployeePage';
import LoginPage from './Pages/LoginPage';

function App() {
    const isAuth = useAppSelector(state => state.authentication.isAuthenticated);

    return <BrowserRouter>
    {!isAuth && <LoginPage />}
    {isAuth && <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="AddEmployee" element={<AddEmployeePage />} />
      <Route path="AddEmployee/:id" element={<AddEmployeePage />} />
    </Routes>
    }
  </BrowserRouter>
}

export default App;