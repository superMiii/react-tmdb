import "./App.css";
import Login from "./Pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function App() {
  return (
    <div className="">
      <Routes>
        {/* {isAuthenticated && (
          <>
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<LogoutButton />} />
          </>
        )} */}
        <Route
          path="/register"
          element={
            <Login
              title="Sign Up"
              getAuth={getAuth}
              signInWithEmailAndPassword={signInWithEmailAndPassword}
              createUserWithEmailAndPassword={createUserWithEmailAndPassword}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              title="Sign In"
              getAuth={getAuth}
              signInWithEmailAndPassword={signInWithEmailAndPassword}
              createUserWithEmailAndPassword={createUserWithEmailAndPassword}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
