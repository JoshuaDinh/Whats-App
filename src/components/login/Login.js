import React from "react";
import { auth, provider } from "../../firebase";
import "./login.css";
import { Button } from "@material-ui/core";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const Login = () => {
  const [{}, dispach] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatchEvent({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://1000logos.net/wp-content/uploads/2018/01/WhatsApp-Logo.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign into WhatsApp</h1>
        </div>
        <Button onClick={signIn} type="submit">
          SignIn with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
