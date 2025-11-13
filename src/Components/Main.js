import React from 'react';
import AdminDashboard from './dashBoards/AdminDashboard';     
import UserDashboard from './dashBoards/UserDashboard';
import DeveloperDashboard from './dashBoards/DeveloperDashboard';

const Main = ({ userRole }) => {
  switch (userRole) {
    case 'Admin':
      return <AdminDashboard />;
    case 'User':
      return <UserDashboard />;
    case 'Developer':
      return <DeveloperDashboard />;
    default:
      return <div>Please select a role.</div>;
  }
};

export default Main;
