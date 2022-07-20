import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

export const Callback = () => {
  // console.log("GITHUB_ClIENT_ID : ", process.env.GITHUB_ClIENT_ID); // dotenv setting err ?
  const GITHUB = {
    ClIENT_ID: "4fb18a74d64e5c2ac9e0",
    ClIENT_SECRETS: "8987cc98f7668ae34b8a4f6e1bb97e6d891f695c",
    CALLBACK_URL: "http://localhost:3000/auth/github/callback",
  };
  const navigate = useNavigate();
  const location = useLocation();
  const url = new URL(window.location.href);
  const authorizationCode = url.searchParams.get("code");
  const getToken = async () => {
    try {
      // const response = await axios.get(
      //   `${GITHUB.CALLBACK_URL}?code=${authorizationCode}` // expect : access_token=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&scope=&token_type=bearer
      // );
      // const { jsonWebToken } = await response.json();
      // localStorage.setItem('token', jsonWebToken);
      // navigate("/");
    } catch (error) {
      console.error("ERROR : ");
    }
  };
  useEffect(() => {
    getToken();
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
