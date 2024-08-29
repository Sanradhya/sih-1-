import React from 'react';
import Navbar from '../components/Navbar';
import '../public/css/styles.css';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard. You are now logged in!</p>
      </div>
    </div>
  );
}
