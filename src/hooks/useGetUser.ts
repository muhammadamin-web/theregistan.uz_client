import { useEffect, useState } from "react";
import useAuthStore from "../store/auth.store";
import axios from "axios";

export const useGetUser = () => {
  const { user, isAuthenticated, token, setUser, organization } =
    useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "/api/user/getuserbyid",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    !isAuthenticated && token && fetchData();
  }, [isAuthenticated, setUser, user, token]);

  return {
    user,
    userLoading: loading,
    userError: error,
    isAuthenticated,
    token,
    organization,
  };
};
