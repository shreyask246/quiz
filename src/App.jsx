import React from "react";
import "./App.css";
import { useState } from "react";
import Quiz from "./Quiz.jsx";
import { creds } from "./creds.js";
import Show from "./Show.jsx";

const App = () => {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const [state3, setState3] = useState(false);

  const onClickbutton = () => {
    users.forEach((i) => {
      if (
        document.getElementById("username").value === i.username &&
        document.getElementById("pass").value === i.password
      ) {
        setState(true);
        return alert("Logged in succesfully");
      }
    });
    if (state === false) return alert("Enter valid Username or Password");
  };
  const onClickbutton1 = () => {
    setState1(true);
  };
  const onSignup = () => {
    users.push({
      username: document.getElementById("username").value,
      password: document.getElementById("pass").value,
    });
    setState1(false);
  };
  const { users } = creds;

  return (
    <>
      {!state ? (
        !state1 ? (
          <div className="login-container">
            <label>
              Username &nbsp;
              <input type="text" id="username" name="username" />
            </label>
            <br />
            <label>
              Password &nbsp;
              <input type="password" id="pass" name="pass" />
            </label>
            <br />
            <p>(Username is a.com and password is 1234)</p>
            <div className="flex-button">
              <button id="loginbutton" onClick={onClickbutton}>
                Log In
              </button>
              &emsp;
              <button id="signupbutton" onClick={onClickbutton1}>
                Sign Up
              </button>
            </div>
          </div>
        ) : (
          // <div className="login-container">
          //   <label>
          //     Username &nbsp;
          //     <input type="text" id="username" name="username" />
          //   </label>
          //   <br />
          //   <label>
          //     Password &nbsp;
          //     <input type="password" id="pass" name="pass" />
          //   </label>
          //   <br />
          //   <button onClick={onSignup}>Sign Up</button>
          // </div>
          <Show />
        )
      ) : (
        <Quiz />
      )}
    </>
  );
};

export default App;
