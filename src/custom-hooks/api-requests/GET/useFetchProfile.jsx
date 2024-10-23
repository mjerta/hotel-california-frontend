import {useState, useEffect} from 'react';
import axios from 'axios';
import hasUserRole from "../../../helpers/hasUserRole.jsx";

const useFetchProfile = (token, roles) => {

  const baseUrl = import.meta.env.VITE_API_URL;

  const [profileData, setProfileData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    points: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch profile data function
  useEffect(() => {
    if (!token || hasUserRole("ROLE_STAFF", roles)) {
      setProfileData({
        id: null,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        points: 0,
      });
      return
    }

    const fetchProfileData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/api/v1/profiles/loggeduser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;

        setProfileData({
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          address: data.address,
          points: data.points,
        });
      } catch (e) {
        if (e.response?.status === 401) {
          setError("Unauthorized - no valid credentials");
        } else if (e.response?.status === 403) {
          setError("This endpoint is restricted");
        } else {
          setError("Something went wrong");
        }
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [token, roles]);

  return {profileData, loading, error};
};

export default useFetchProfile;
