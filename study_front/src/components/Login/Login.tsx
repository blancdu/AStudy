export const Login = () => {
  const GITHUB_CALLBACK_URL = "http://localhost:3000/auth/github/callback";
  const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=4fb18a74d64e5c2ac9e0&redirect_uri=${GITHUB_CALLBACK_URL}`;
  const socialLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };
  return (
    <div className="loginContainer">
      <button onClick={socialLoginHandler} className="socialloginBtn">
        Github으로 로그인
      </button>
    </div>
  );
};
