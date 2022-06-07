import React from 'react';
import '../stylesheets/ClearButton.css'

const ClearButton = (props) => (
  <div
    className='btn-clear'
    onClick={props.clearHandler}
  >
    {props.children}
  </div>
);

export default ClearButton;
