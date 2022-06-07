import React from 'react';
import '../stylesheets/ClearButton.css'

const ClearButton = (props) => (
  <div className='btn-clear'>
    {props.children}
  </div>
);

export default ClearButton;
