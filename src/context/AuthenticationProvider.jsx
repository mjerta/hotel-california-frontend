import {createContext, useState, useEffect} from 'react';
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

// states
const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    token: null,
    decodedToken: null,
    roles: [],
    username: null,
  });

  // on start up - get token from local storage
  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    if (storedToken) {
      setAuthState((prevState) => ({
        ...prevState,
        token: storedToken,
        decodedToken: decodeToken(storedToken),
        roles: decodeToken(storedToken).authorities,
        username: decodeToken(storedToken).sub,
      }));
    }
  }, []);

  // token will be saved in states and in local storage
  const saveToken = (jwtToken) => {
    setAuthState((prevState) => ({
      ...prevState,
      token: jwtToken,
      decodedToken: decodeToken(jwtToken),
      roles: decodeToken(jwtToken).authorities,
      username: decodeToken(jwtToken).sub,
    }));
    localStorage.setItem('jwt', jwtToken);  // Optionally store the token
  };

  // reset states and localstorage
  const removeToken = () => {
    setAuthState({
      token: null,
      decodedToken: null,
      roles: [],
      username: null,
    });
    localStorage.removeItem('jwt');
  };

  // function to decode token
  const decodeToken = (jwtToken) => {
    try {
      return jwtDecode(jwtToken);
    } catch (error) {
      console.error('Invalid JWT Token', error);
    }
  };

  return (
    <AuthContext.Provider value={{
      saveToken,
      removeToken,
      token: authState.token,
      roles: authState.roles,
      username: authState.username,
      decodedToken: authState.decodedToken
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
