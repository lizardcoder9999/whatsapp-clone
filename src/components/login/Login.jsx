import React from "react";
import { useStateValue } from "../../StateProvider";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import "./Login.css";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((response) => {
        dispatch({
          type: actionTypes.SET_USER,
          payload: response.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png"
          alt="logo"
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
