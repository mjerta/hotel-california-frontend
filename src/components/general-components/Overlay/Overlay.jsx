import React from 'react';

import "./Overlay.css"

function Overlay({classname}) {
  return (
    <div className={`overlay ${classname ? classname : ''}`}>
    </div>
  )
}

export default Overlay;