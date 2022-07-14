import { Routes, Route } from "react-router-dom";
import { Home, AboutUs, User } from "pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/my" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
