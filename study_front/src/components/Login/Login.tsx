import { useEffect, useState } from "react";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem("token");
  const GITHUB_CALLBACK_URL = "http://localhost:3000/auth/github/callback"; // TODO: useing dotenv
  const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=4fb18a74d64e5c2ac9e0&redirect_uri=${GITHUB_CALLBACK_URL}`; // TODO: useing dotenv

  useEffect(() => {
    if (token) setIsLogin(true);
  }, [token]);

  const socialLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };

  return (
    <div className="loginContainer">
      {isLogin ? (
        <h1>login 성공</h1>
      ) : (
        <button onClick={socialLoginHandler} className="socialloginBtn">
          Github으로 로그인
        </button>
      )}
    </div>
  );
};
