import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL_API } from "../../global";

const BASE_URL = BASE_URL_API;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // Only redirect to /login if the user is not on the signup page
        if (location.pathname !== "/signup") {
          navigate("/login");
        }
      } else if (
        token &&
        (location.pathname === "/login" || location.pathname === "/signup")
      ) {
        navigate("/home");
      } else {
        try {
          const response = await axios.get(`${BASE_URL}/me`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          });

          if (response.status !== 200) {
            throw new Error("Invalid token");
          }
        } catch (error) {
          navigate("/login");
        }
      }
    };

    verifyToken();
  }, [navigate, location.pathname]);

  return children;
};

export default ProtectedRoute;
