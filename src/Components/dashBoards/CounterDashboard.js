import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IncrementButton from '../sidebar/counters/IncrementButton';
import DecrementButton from '../sidebar/counters/DecrementButton';
import ResetButton from '../sidebar/counters/ResetButton';

const CounterDashboard = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const increment = () => {
    if (count >= 10) alert('This is the max value reached');
    else setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) alert('This is the min value reached');
    else setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h2>Counter Dashboard</h2>
      <button
        onClick={() => navigate(-1)}
        style={styles.goBackButton}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        Go Back
      </button>

      <div style={styles.counterWrapper}>
        <h3>COUNTER</h3>
        <h1>{count}</h1>
        <div style={styles.buttonGroup}>
          <IncrementButton onIncrement={increment} />
          <DecrementButton onDecrement={decrement} />
        </div>
        <ResetButton onReset={reset} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#97d8abff',
    flex: 1,
    height: '100vh',
  },
  goBackButton: {
    marginBottom: 20,
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
  counterWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  },
};

export default CounterDashboard;
