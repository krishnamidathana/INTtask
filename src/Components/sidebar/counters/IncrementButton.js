import React from 'react';
const IncrementButton = ({ onIncrement }) => (
  <button 
  style={{width:'120px',height:'30px' ,  borderRadius:'30px',border:'none',fontWeight:'bold',cursor:'pointer'}}
  onClick={onIncrement}>Increment</button>
);
export default IncrementButton;
