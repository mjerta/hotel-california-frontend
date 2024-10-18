import {createContext, useState, useEffect} from 'react';
import {jwtDecode} from "jwt-decode";
import useFetchProfile
  from "../custom-hooks/api-requests/GET/useFetchProfile.jsx";

export const AuthContext = createContext();

// states
const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    token: null,
    decodedToken: null,
    roles: [],
    username: null,
  });

  // PROFILE SECTION

  // This will be fired whne a token is being set, could be in the useffect or on saveToken
  const {profileData, loading, error} = useFetchProfile(authState.token);
  console.log(profileData)
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(profileData.points
    )
  }, [profileData]);

  // PROFILE SECTION




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
      profileData,
      points: points,
      setPoints: setPoints,
      profileLoading: loading,
      profileError: error,
      decodedToken: authState.decodedToken
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
