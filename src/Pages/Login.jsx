import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({
  title,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("_token");

    if (authToken) {
      navigate("/");
    }
  }, [navigate]);
  const handleAction = (e) => {
    const authentication = getAuth();
    if (title === "Sign Up") {
      if (password === repeatPassword) {
        createUserWithEmailAndPassword(authentication, email, password)
          .then((response) => {
            navigate("/login");
          })
          .catch((error) => {
            console.log(error.code);
            if (error.code === "auth/email-already-in-use") {
              toast.error("Email Already in Use");
            }
            if (error.code === "auth/weak-password") {
              toast.error("Weak Password");
            }
          });
      } else {
        toast.error("Password doesn't match");
      }
    } else {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/");
          sessionStorage.setItem(
            "_token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/internal-error") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/invalid-email") {
            toast.error("Please check the Email");
          }
        });
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <img
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-99 opacity-60 h-screen w-screen object-cover"
        alt=""
      />

      <img
        src="https://rb.gy/ulxxee"
        alt=""
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <Form
        title={title}
        setEmail={setEmail}
        setPassword={setPassword}
        setRepeatPassword={setRepeatPassword}
        handleAction={() => handleAction()}
      />
      <ToastContainer />
    </div>
  );
}

export default Login;
