// HomeScreen.js
import React, { useReducer } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/sidebar/Sidebar";
import Main from "../Components/Main";
import { initialState, reducer } from "../reducer/reducer";

const HomeScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const { isLoggedIn, showDialog, userRole } = state;

  const handleLoginClick = () => {
    dispatch({ type: "SHOW_DIALOG" });

  };

  const handleRoleSelect = (role) => {
    dispatch({ type: "SELECT_ROLE", role });
      localStorage.setItem('userRole', role);
  localStorage.setItem('isLoggedIn', 'true');
 
  };

  const handleLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
     localStorage.removeItem('userRole');
  localStorage.removeItem('isLoggedIn');
  
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header
        name="Krishna"
        isLoggedIn={isLoggedIn}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogoutClick}
      />

      {showDialog && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 8,
              width: 300,
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            <h2>Select User Role</h2>
            {["Admin", "User", "Developer"].map((role) => (
              <button
                key={role}
                onClick={() => handleRoleSelect(role)}
                style={{
                  margin: "10px 0",
                  padding: "10px 20px",
                  width: "100%",
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      )}

      {isLoggedIn ? (
        <>
          <div
            style={{
              padding: 10,
              backgroundColor: "#e0f7fa",
              color: "#006064",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Welcome, {userRole}!
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <Sidebar userRole={userRole} />
            <Main userRole={userRole} />
          </div>
        </>
      ) : (
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 24,
            fontWeight: "bold",
            padding:'200px 20px',
          }}
        >
          Please login
        </div>
      )}

      {isLoggedIn && <Footer />}
    </div>
  );
};

export default HomeScreen;
