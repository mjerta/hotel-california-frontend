import { createContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Retrieve the token from localStorage when the provider mounts
  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);  // Empty dependency array means this effect runs only once when the component mounts

  // Function to update token and store it in localStorage
  const saveToken = (jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem('jwt', jwtToken);  // Optionally store the token
  };

  const removeToken = () => {
    setToken(null);
    localStorage.removeItem('jwt');
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
