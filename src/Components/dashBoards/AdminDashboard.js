import React from 'react';

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Dashboard</h2>
      <p style={styles.description}>
           Manage users, view reports, and configure settings.
      </p>
    
    </div>
  );
};

const styles = {
  container: {
    padding: 30,
    // maxWidth: 640,
    margin: '50px auto',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    color: '#222',
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
    color: '#007acc',
  },
  description: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    color: '#555',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
    margin: 0,
  },

};

export default AdminDashboard;
