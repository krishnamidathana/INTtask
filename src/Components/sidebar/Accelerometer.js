import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Accelerometer = () => {
  const [speed, setSpeed] = useState(0);
  const navigate  = useNavigate();

  const bgColor = [
    { range: [0, 59], color: "green" },
    { range: [60, 120], color: "yellow" },
    { range: [121, 200], color: "red" },
  ].find(({ range }) => speed >= range[0] && speed <= range[1]).color;

  const handleAccelerate = () => {
    setSpeed((prev) => Math.min(prev + 10, 200));
  };

  const handleBreak = () => {
    setSpeed((prev) => Math.max(prev - 10, 0));
  };

  return (
  <div style={styles.main}>
    <div style={styles.backButtonContainer}>
      <button
        style={styles.backButton}
        onClick={() => navigate(-1)}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        Go Back
      </button>
    </div>

    <div style={{ ...styles.speedDisplay, backgroundColor: bgColor }}>
      <span style={styles.speedText}>{speed}</span>
    </div>

    <div style={styles.buttonsContainer}>
      <button style={styles.accelerateBtn} onClick={handleAccelerate}>
        Accelerate
      </button>

      <button style={styles.breakBtn} onClick={handleBreak}>
        Break
      </button>
    </div>
  </div>
);

};

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  backButtonContainer: {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
},
  speedDisplay: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:100,
    marginBottom: 20,
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  },
  speedText: {
    fontSize: 48,
    fontWeight: "bold",
    userSelect: "none",
  },
  buttonsContainer: {
    display: "flex",
    gap: 20,
  },
  accelerateBtn: {
    padding: "12px 24px",
    fontSize: 16,
    backgroundColor: "#00cc44",
    border: "none",
    borderRadius: 8,
    color: "white",
    cursor: "pointer",
  },
  breakBtn: {
    padding: "12px 24px",
    fontSize: 16,
    backgroundColor: "#cc0000",
    border: "none",
    borderRadius: 8,
    color: "white",
    cursor: "pointer",
  },
  backButton: {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: 16,
  userSelect: "none",
  transition: "background-color 0.3s ease",
  margin:20,
},

};

export default Accelerometer;
