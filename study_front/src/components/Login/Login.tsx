import { useState } from "react";

export const Login = () => {
  // const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));
  const [isLogin, setIsLogin] = useState();
  console.log(isLogin);
  const GITHUB_CALLBACK_URL = "http://localhost:3000/auth/github/callback";
  const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=4fb18a74d64e5c2ac9e0&redirect_uri=${GITHUB_CALLBACK_URL}`;

  const socialLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };
  return (
    <div className="loginContainer">
      {/* <a href={GITHUB_LOGIN_URL}>Github으로 로그인</a> -> TODO: 사용하지 않은 이유 서술하기 */}
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
