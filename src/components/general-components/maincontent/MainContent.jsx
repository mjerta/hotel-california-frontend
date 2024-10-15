import React from 'react';

import "./MainContent.css"
function MainContent({className, children}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default MainContent;