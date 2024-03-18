import React from 'react';
import { Switch, Route, Routes } from "react-router-dom"
import SideNavbar from './navigationBar/SideNavbar';
import UserList from './userList/UserList';
import CompanyUserDetail from './pages/componets/CompanyUserDetail';

function App() {
  return (
    <div className="App">
      <SideNavbar >
        <Routes>
          <Route path='/' exact element={<UserList />} />
          <Route path='/userList' exact element={<UserList />} />
          <Route path='/userDetail' exact element={<CompanyUserDetail />} />
        </Routes>
      </SideNavbar>
    </div>
  );
}

export default App;
