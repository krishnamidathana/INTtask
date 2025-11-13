import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ userRole }) => {
  const navigate = useNavigate();
  let options = [];

  if (userRole === 'Admin') {
    options = ['Dashboard', 'User Management', 'Reports'];
  } else if (userRole === 'User') {
    options = ['My Profile', 'Orders', 'Support'];
  } else if (userRole === 'Developer') {
    options = ['API Docs', 'Developer Tools', 'System Logs'];
  } 

  // Tasks section items 

  const handleClick = (item) => {
    if (item === 'Tasks') {
      navigate('/tasksDashboard');
    }else {
      alert(`You clicked: ${item}`);
    }
  };

  return (
    <nav style={styles.sidebar}>
      <ul style={styles.list}>
        {options.map((item, index) => (
          <li
            key={index}
            style={styles.listItem}
            onClick={() => handleClick(item)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a7c5f1ff')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {item}
          </li>
        ))}
        <li 
  style={styles.tasksButton}
  onClick={() => handleClick('Tasks')}
>
  Tasks
</li>
       
      </ul>
    </nav>
  );
};

const styles = {
  sidebar: {
    width: '260px',
    height: '100vh',
    padding: '20px 10px',
    backgroundColor: '#f9fbfd',
    borderRight: '1px solid #ccc',
    fontFamily: 'sans-serif',
    boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: '12px 15px',
    marginBottom: 8,
    fontSize: 16,
    color: '#333',
    cursor: 'pointer',
    borderRadius: 4,
    userSelect: 'none',
    transition: 'background-color 0.25s ease',
    fontWeight: 'bold',
  },
  tasksButton: {
    padding: '8px 15px',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor:"#dde28eff",
    marginTop: 20,
    marginBottom: 8,
    textTransform: 'uppercase',
    fontSize: 14,
    borderBottom: '1px solid #fff',
    cursor: 'pointer',

  },
};

export default Sidebar;
