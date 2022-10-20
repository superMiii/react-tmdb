import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";
import LogoutButton from "./components/LogoutButton";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="App">
      <Routes>
        {isAuthenticated && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<LogoutButton />} />
          </>
        )}
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
