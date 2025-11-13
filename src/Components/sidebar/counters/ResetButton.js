import React from 'react';
const ResetButton = ({ onReset }) => (
  <button
  style={{width:'120px',height:'30px' ,  borderRadius:'30px',border:'none',fontWeight:'bold',cursor:'pointer'}}
   onClick={onReset}>Reset</button>
);
export default ResetButton;
