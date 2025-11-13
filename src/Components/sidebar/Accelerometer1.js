import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Accelerometer = () => {
  const [speed, setSpeed] = useState(0);
  const navigate = useNavigate();
  // Speed color logic same as before
  const bgColor = [
    
    { range: [0,0], color: "#222",},
    { range: [0, 59], color: "#21cf64ff" },
    { range: [60, 120], color: "#cce018ff" },
    { range: [121, 200], color: "#d85151ff" },
  ].find(({ range }) => speed >= range[0] && speed <= range[1]).color;

  const handleAccelerate = () => {
    setSpeed((prev) => Math.min(prev + 10, 200));
  };

  const handleBreak = () => {
    setSpeed((prev) => Math.max(prev - 10, 0));
  };

  const marks = Array.from({ length: 11 }, (_, i) => i * 20);

  const angle = -180 + (speed / 200) * 180 + 90;

 
  return (
    <div style={{...styles.main, backgroundColor:bgColor} }>
      <div style={styles.backButtonContainer}>
        <button
          style={styles.backButton}
          onClick={() => navigate(-1)}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
        >
          Go Back
        </button>
      </div>
<h1>Accelerometer</h1>
      <div style={styles.dialContainer}>
        {marks.map((mark, i) => {
          const totalMarks = marks.length - 1;
          const markAngle = (-180 + (180 / totalMarks) * i) * (Math.PI / 180);

          const radius = 120;
          const left = 140 + radius * Math.cos(markAngle);
          const top = 140 + radius * Math.sin(markAngle);

          return (
            <div
              key={i}
              style={{
                ...styles.dialMark,
                left,
                top,
                transform: `translate(-50%, -50%) rotate(0rad)`,
              }} 
            >
              {mark}
            </div>
          );
        })}

        {/* Pointer/needle */}
        <div style={{ ...styles.needle, transform: `rotate(${angle}deg)` }}></div>

        {/* <div style={{ ...styles.speedCenter, backgroundColor: bgColor }}>{speed}</div> */}
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
    width:"100%",
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    backgroundColor: "#222",
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    gap: 20,
  padding: 20,      
  boxSizing: "border-box"
  },
  backButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    

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
  },
  dialContainer: {
    position: "relative",
    width: 280,
    height: 150,
    borderTopLeftRadius: 140,
    borderTopRightRadius: 140,
    backgroundColor: "#111",
    border: "3px solid #555",
    marginBottom: 30,
  },
  dialMark: {
    position: "absolute",
    color: "#ccc",
    fontSize: 14,
    userSelect: "none",
  },
  speedCenter: {
    position: "absolute",
    width: 90,
    height: 90,
    borderRadius: "50%",
    top: 50,
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    boxShadow: "0 0 15px rgba(0,0,0,0.5)",
  },
  buttonsContainer: {
    display: "flex",
    gap: 20,
    marginBottom: 40,
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
  needle: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    width: 4,
    height: 110,
    backgroundColor: "red",
    transformOrigin: "bottom center",
    transition: "transform 0.4s ease-out",
    borderRadius: 4,
    boxShadow: "0 0 6px rgba(255,0,0,0.7)",
    
  },
};

export default Accelerometer;
