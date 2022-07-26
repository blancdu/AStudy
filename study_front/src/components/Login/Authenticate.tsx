import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

export const Authenticate = () => {
  const baseUrl = "http://localhost:8080/login/auth/callback";
  const navigate = useNavigate();
  const location = useLocation();
  const authorizationCode = new URL(window.location.href).searchParams.get(
    "code"
  );
  const getToken = async () => {
    try {
      const token = await axios.get(`${baseUrl}?code=${authorizationCode}`);
      const { jsonWebToken }: any = await token;
      localStorage.setItem("token", jsonWebToken);
      navigate("/");
    } catch (error) {
      console.error("ERROR : ");
    }
  };
  useEffect(() => {
    getToken();
    navigate("/");
  }, [location, authorizationCode]);

  return (
    <div className="authenticate">
      <div className="container">
        <h1 className="title">Authenticate</h1>
        <div className="d-flex justify-content-center loading">
          <div
            className="spinner-border text-light spinner-style"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
