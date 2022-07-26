import { useEffect, useState } from "react";

export const Login = () => {
  const { REACT_APP_GITHUB_ClIENT_ID, REACT_APP_GITHUB_CALLBACK_URL } =
    process.env;
  const githubBaseUrl = "https://github.com/login/oauth/authorize";
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem("token");
  const GITHUB_LOGIN_URL = `${githubBaseUrl}?client_id=${REACT_APP_GITHUB_ClIENT_ID}&redirect_uri=${REACT_APP_GITHUB_CALLBACK_URL}`;

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
