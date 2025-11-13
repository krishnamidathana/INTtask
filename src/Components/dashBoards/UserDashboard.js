import React from 'react';

const UserDashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Dashboard</h2>
      <p style={styles.description}>
        View your profile, recent orders, and support options.
      </p>
    
    </div>
  );
};

const styles = {
  container: {
    padding: 30,
    maxWidth: 640,
    margin: '50px auto',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: 12,
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    color: '#222',
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
    color: '#0056b3',
  },
  description: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  list: {
    listStyleType: 'none',  // Removed bullet points for a clean look
    paddingLeft: 0,
    margin: 0,
  },

};

export default UserDashboard;
