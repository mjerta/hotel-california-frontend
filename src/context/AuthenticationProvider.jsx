import {createContext, useState, useEffect} from 'react';
import {jwtDecode} from "jwt-decode";
import useFetchProfile
  from "../custom-hooks/api-requests/GET/useFetchProfile.jsx";
import isExpirationTimeValid from "../helpers/isExpirationTimeValid.js";

export const AuthContext = createContext();

// STATES
const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    token: null,
    decodedToken: null,
    roles: [],
    username: null,
    isAuthenticated: false,
    status: 'pending'
  });

  // PROFILE SECTION //

  // This will be triggered when a user is authenticated, could be ON START UP or on ON LOGIN
  const {
    profileData,
    loading,
    error
  } = useFetchProfile(authState.isAuthenticated, authState.token, authState.roles);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(profileData.points
    )
  }, [profileData]);

  // PROFILE SECTION //

  // ON START UP - get token from local storage
  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    if (storedToken && isExpirationTimeValid(decodeToken(storedToken).exp)) {
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        token: storedToken,
        decodedToken: decodeToken(storedToken),
        roles: decodeToken(storedToken).authorities,
        username: decodeToken(storedToken).sub,
        status: 'done'
      }));
    } else {
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        status: 'done'
      }))
    }
  }, []);

  // ON LOGIN
  // Token will be saved in states and in local storage //  this is being used in the login form
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
  // ON LOGIN
  // Authentication takes place // this is being used in the login form
  const login = () => {
    setAuthState((prevState) => ({
      ...prevState,
      isAuthenticated: true,
      status: 'done'
    }))
  }

  // reset states and localstorage
  const logout = () => {
    setAuthState({
      token: null,
      decodedToken: null,
      roles: [],
      username: null,
      status: 'done'
    });
    localStorage.removeItem('jwt');

  };

  // DECODE FUNCTION
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
      logout: logout,
      token: authState.token,
      login: login,
      roles: authState.roles,
      username: authState.username,
      isAuthenticated: authState.isAuthenticated,
      profileData,
      points: points,
      setPoints: setPoints,
      profileLoading: loading,
      profileError: error,
      decodedToken: authState.decodedToken,
      isLoading: authState.isLoading,
    }}>
      {authState.status === 'done' ? children : <h1>Loading</h1>}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
