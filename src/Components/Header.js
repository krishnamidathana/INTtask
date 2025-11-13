const Header = ({ name, isLoggedIn, onLoginClick, onLogoutClick }) => {
  return (
    <div style={{
      height: '60px',
      backgroundColor: '#007acc',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      fontSize: '24px',
      fontWeight: 'bold',
    }}>
      <div>Header Section {name}</div>
      {isLoggedIn ? (
        <button
          style={{
            backgroundColor: '#fff',
            color: '#007acc',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 5,
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onClick={onLogoutClick}
        >
          Logout
        </button>
      ) : (
        <button
          style={{
            backgroundColor: '#fff',
            color: '#007acc',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 5,
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onClick={onLoginClick}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
