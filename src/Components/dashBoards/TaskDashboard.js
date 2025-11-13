import React from "react";
import { useNavigate } from "react-router-dom";

const tasks = [
  { title: "Role based Login", path: "/", date: "10/11/2025" },
  { title: "Registration Form", path: "/registration", date: "10/11/2025" },
  { title: "Counter", path: "/counter", date: "11/11/2025" },
  { title: "Accelerometer", path: "/accelerometer", date: "12/11/2025" },
  { title: "Accelerometer1", path: "/accelerometer1", date: "12/11/2025" },
];

const TaskDashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <button
        style={styles.backButton}
        onClick={() => navigate(-1)}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
      >
        Go Back
      </button>
  
      {/* Heading */}
      <h1 style={styles.heading}>Tasks</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          padding: 20,
          justifyContent: "flex-start",
          padding: '20px 20px 20px 150px' 

        }}
      >
        {tasks.map((task, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(task.path)}
            style={{
              cursor: "pointer",
              width: 220,
              height: 140,
              padding: 20,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: 8,
              backgroundColor: "#aceedd",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 18,
              color: "#003a5c",
              transition: "transform 0.2s ease",
              position: "relative",
              boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',

            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Date at top-left */}
            <span
              style={{
                position: "absolute",
                top: 10,
                left: 15,
                fontSize: 12,
                fontWeight: "normal",
                color: "black",
                fontWeight:'bold',
              }}
            >
              Date: {task.date}
            </span>

            {/* Title centered */}
            {task.title}
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  backButton: {
    padding: "15px 30px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: 16,
    userSelect: "none",
    transition: "background-color 0.3s ease",
    // marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    display: "inline-block",
  },
  heading: {
    textAlign: "center",
    color: "black",
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
        //   flexWrap: "wrap",

  },
};

export default TaskDashboard;
