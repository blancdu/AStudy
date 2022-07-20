import axios from "axios";
import { useLocation } from "react-router-dom";

export const Callback = () => {
  const GITHUB = {
    ClIENT_ID: "4fb18a74d64e5c2ac9e0",
    ClIENT_SECRETS: "8987cc98f7668ae34b8a4f6e1bb97e6d891f695c",
    CALLBACK_URL: "http://localhost:3000/auth/github/callback",
  };
  //   const location = useLocation();
  const url = new URL(window.location.href);
  const authorizationCode = url.searchParams.get("code");
  const data = axios
    .post("https://github.com/login/oauth/access_token", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        client_id: GITHUB.ClIENT_ID,
        client_secret: GITHUB.ClIENT_SECRETS,
        code: authorizationCode,
      },
    })
    .then((res) => {
      console.log("response : ", res);
    })
    .catch((err) => {
      console.log("error : ", err);
    });

  return (
    <>
      <h1>im Callback tsx</h1>
      {/* <p>{location}</p> */}
      <p></p>
    </>
  );
};
