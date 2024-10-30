import {createContext, useState, useEffect} from 'react';
import {jwtDecode} from "jwt-decode";
import useFetchProfile
  from "../custom-hooks/api-requests/GET/useFetchProfile.jsx";
import isExpirationTimeValid from "../helpers/isExpirationTimeValid.js";

export const AuthContext = createContext();

// states
const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    token: null,
    decodedToken: null,
    roles: [],
    username: null,
    isAuthenticated: false,
    status: 'pending'
  });

  // PROFILE SECTION

  // This will be fired when a token is being set, could be in the useffect or on saveToken
  const {
    profileData,
    loading,
    error
  } = useFetchProfile(authState.isAuthenticated, authState.token, authState.roles);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    console.log(profileData)
    setPoints(profileData.points
    )
  }, [profileData]);

  // PROFILE SECTION

  // on start up - get token from local storage
  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    if (!storedToken) {
      setAuthState({
        status: 'done'
      })
      return
    }
    const tokenValidated = isExpirationTimeValid(decodeToken(storedToken).exp)
    if (storedToken && tokenValidated) {
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

  const login = () => {
    setAuthState((prevState) => ({
      ...prevState,
      isAuthenticated: true,
      status: 'done'
    }))
  }

  // reset states and localstorage
  const removeToken = () => {
    setAuthState({
      token: null,
      decodedToken: null,
      roles: [],
      username: null,
      status: 'done'
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
