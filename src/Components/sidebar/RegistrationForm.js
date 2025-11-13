import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";

const RegistrationForm = () => {
  const [previewData, setPreviewData] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [showRegistered, setShowRegistered] = useState(false);
    const navigate = useNavigate();

  const handleShowRegistered = () => {
    const savedUsers = localStorage.getItem("registeredUsers");
    if (savedUsers) {
      setRegisteredUsers(JSON.parse(savedUsers));
    } else { 
      setRegisteredUsers([]);
    }
    setShowRegistered(true);
  };

  const handleBackToForm = () => {
    setShowRegistered(false);
    setPreviewData(false)
  };


  const handleRemoveUser = (index) => {
    const newUsers = registeredUsers.filter((_, i) => i !== index);
    setRegisteredUsers(newUsers);
    localStorage.setItem("registeredUsers", JSON.stringify(newUsers));
  };

  return (
    <div  style={styles.main}>
      {!showRegistered && (
        <> 
       <h2 style={styles.heading}>Registration Form</h2>
       <div style={styles.buttonsRow}>
      <button
        onClick={() => navigate(-1)}
 registrationScreenButtons
        style={styles.registrationScreenButtons}   
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        Go Back
      </button>
      <button
        onClick={handleShowRegistered}
 registrationScreenButtons
        style={styles.registrationScreenButtons}
      >
        Registered Users
      </button>
    </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            mobile: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.firstName) errors.firstName = "Required";
            if (!values.lastName) errors.lastName = "Required";
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Password must be at least 6 characters";
            }
            if (!values.mobile) {
              errors.mobile = "Required";
            } else if (!/^\d{10}$/.test(values.mobile)) {
              errors.mobile = "Mobile number must be 10 digits";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
             
              const savedUsers = localStorage.getItem("registeredUsers");
              let users = savedUsers ? JSON.parse(savedUsers) : [];

              // Append new user data 
              users.push(values);
              
              // Save back to localStorage
              
              localStorage.setItem("registeredUsers", JSON.stringify(users));
              
              alert("Registered Successfully And Saved TO The Local Storage");
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          {({ isSubmitting, values, validateForm }) => (
            <>
             

              <Form style={styles.form}>
                <div style={styles.fieldWrapper}>
                  <label htmlFor="firstName" style={styles.label}>
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    style={styles.input}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    style={styles.error}
                  />
                </div>

                <div style={styles.fieldWrapper}>
                  <label htmlFor="lastName" style={styles.label}>
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    style={styles.input}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    style={styles.error}
                  />
                </div>

                <div style={styles.fieldWrapper}>
                  <label htmlFor="email" style={styles.label}>
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    style={styles.input}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={styles.error}
                  />
                </div>

                <div style={styles.fieldWrapper}>
                  <label htmlFor="password" style={styles.label}>
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    style={styles.input}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={styles.error}
                  />
                </div>

                <div style={styles.fieldWrapper}>
                  <label htmlFor="mobile" style={styles.label}>
                    Mobile Number
                  </label>
                  <Field
                    type="text"
                    name="mobile"
                    id="mobile"
                    style={styles.input}
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    style={styles.error}
                  />
                </div>

                <button
                  type="button" 
                  style={{ ...styles.button, backgroundColor: "#28a745", marginBottom: 10 }}
                  onClick={() => {
                    validateForm().then((errors) => {
                      if (Object.keys(errors).length === 0) {
                        setPreviewData(values);
                      } else {
                        setPreviewData(null);
                        alert("All fields are required.");
                      }
                    });
                  }}
                >
                  Preview
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={styles.button}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                >
                  Register
                </button>
              </Form>

              {previewData && (
                <div style={styles.preview}>
                  <h3>Preview</h3>
                  <p>
                    <b>First Name:</b> {previewData.firstName}
                  </p>
                  <p>
                    <b>Last Name:</b> {previewData.lastName}
                  </p>
                  <p>
                    <b>Email:</b> {previewData.email}
                  </p>
                  <p>
                    <b>Mobile:</b> {previewData.mobile}
                  </p>
                </div>
              )}
            </>
          )}
        </Formik>
            </>

      )}

      {showRegistered && (
        <div style={styles.registeredUsersContainer}>
          <h3 style={styles.registeredUsersHeading}>Registered Users</h3>
          <button onClick={handleBackToForm} style={styles.backButton}>
            Back to Registration
          </button>

          {registeredUsers.length === 0 ? (
            <p style={styles.noUsersMessage}>No registered users found.</p>
          ) : (
            <ul style={styles.userList}>
              {registeredUsers.map((user, index) => (
                <li key={index} style={styles.userItem}>
                  <div>
                    <p style={styles.userName}>
                      {user.firstName} {user.lastName}
                    </p>
                    <p style={styles.userInfo}>
                      <b>Email:</b> {user.email}
                    </p>
                    <p style={styles.userInfo}>
                      <b>Mobile:</b> {user.mobile}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveUser(index)}
                    style={styles.removeButton}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  main: {
  backgroundColor: '#b1a1eeff',
  minHeight: '100vh',    
  paddingTop: 20,        
  paddingBottom: 20,
  boxSizing: 'border-box',
},
buttonsRow: {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '420px',
  margin: '0 auto 20px auto',
  gap: '10px',
},

    heading: {
  textAlign: 'center',
  color: 'black',
  marginBottom: 20,
  fontWeight: 'bold',
  fontSize: '28px',
  fontFamily: 'Arial, sans-serif',
},

 registrationScreenButtons: {
    marginBottom: 20,
    marginLeft:20,
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.3)',
    transition: 'background-color 0.3s ease',
  },
  form: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#bfe495ff",
  },
  fieldWrapper: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "6px",
    fontWeight: "600",
    color: "#333",
    fontSize: "14px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  error: {
    color: "#d93025",
    fontSize: "13px",
    marginTop: "5px",
  },
  button: {
    padding: "12px",
    width: "100%",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    
  },
  preview: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  registeredUsersButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0px 30px 0 0",
  },
  registeredUsersButton: {
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
  },
  registeredUsersContainer: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
    backgroundColor: "#c1e6b3ff",
    fontFamily: "Arial, sans-serif",
  },
  registeredUsersHeading: {
    marginBottom: 20,
    color: "#007bff",
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    marginBottom: 20,
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
  },
  noUsersMessage: {
    textAlign: "center",
    color: "#555",
    fontStyle: "italic",
  },
  userList: {
    listStyle: "none",
    padding: 0,
  },
  userItem: {
    marginBottom: 15,
    padding: 15,
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#fefefe",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    margin: "4px 0",
    fontWeight: "600",
    fontSize: "16px",
  },
  userInfo: {
    margin: "3px 0",
    color: "#333",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    cursor: "pointer",
    fontWeight: "bold",
    height: "fit-content",
  },
};

export default RegistrationForm;
