import { Routes, Route } from "react-router-dom";
import { Home, AboutUs, User } from "pages";
import { Authenticate } from "components/Login/Authenticate";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/github/callback" element={<Authenticate />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/my" element={<User />} />
        <Route path="*" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
