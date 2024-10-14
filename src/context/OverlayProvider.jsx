import {createContext, useState} from 'react';

export const OverlayContext = createContext(null);

function OverlayProvider({children}) {
  const [isOverlayOpen, setIsOverLayOpen] = useState(false);

  function toggleOverlay() {
    setIsOverLayOpen((prev) => !prev);
  }
  return (
    <OverlayContext.Provider value={{isOverlayOpen, toggleOverlay}}>
      {children}
    </OverlayContext.Provider>
  )
}
export default OverlayProvider;