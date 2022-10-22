import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";
import LogoutButton from "./components/LogoutButton";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import { app } from "./firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

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
