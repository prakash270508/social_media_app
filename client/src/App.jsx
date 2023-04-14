import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login";
// import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Profile from './components/Profile.jsx'
import Navbar from "./components/NAvbar";
import SignUp2 from "./components/SignUp2";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth/login" element={<Login />} />
          <Route exact path="/auth/signup" element={<SignUp2 />} />
          <Route exact path="/user-profile/:userId" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
