import React from 'react';
const DecrementButton = ({ onDecrement }) => (
  <button 
  style={{width:'120px',height:'30px' ,  borderRadius:'30px',border:'none',fontWeight:'bold',cursor:'pointer'}}
  onClick={onDecrement}>Decrement</button>
);
export default DecrementButton;
