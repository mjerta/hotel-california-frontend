import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const LocationContext = createContext();

function LocationProvider({children}) {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [locations, setLocations] = useState();

  useEffect(() => {
    async function fetchAllLocations() {
      try {
        const result = await axios.get(`${baseUrl}/api/v1/locations`);
        setLocations(result.data)
      } catch (e) {
        console.error(e)
      }
    }
    void fetchAllLocations();
  }, []);

  return (
    <LocationContext.Provider value={{
      locations,
    }}>
      {children}
    </LocationContext.Provider>
  )
}

export default LocationProvider;