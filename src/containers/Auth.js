import React, { useState } from "react";
import loginLogo from "../assets/images/login.jpeg";
import Input from "../component/UI/Input/Input";
import { Redirect } from "react-router-dom";
import "./Auth.css";
import * as actions from "../store/action/auth";
import { useDispatch, useSelector } from "react-redux";

function Auth(props) {
  const isLoading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const isAuth = useSelector((state) => state.token !== null);

  const dispatch = useDispatch();
  const [controls, setControls] = useState({
    email: {
      elementConfig: {
        type: "email",
        placeholder: "Email",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 8,
      },
      valid: false,
      touched: false,
    },
  });

  const onAuth = (email, password) => {
    dispatch(actions.auth(email, password));
  };

  const inputCHangeHandler = (e, contorlName) => {
    const updateControl = {
      ...controls,
      [contorlName]: {
        ...controls[contorlName],
        value: e.target.value,
        touched: true,
      },
    };
    setControls(updateControl);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAuth(controls.email.value, controls.password.value);
  };

  return (
    <div className="Auth">
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error ? (
        <p>Somthing goes wrong...</p>
      ) : isAuth ? (
        <Redirect to="/info" />
      ) : (
        <form onSubmit={onSubmitHandler}>
          <img src={loginLogo} alt="BurgerShop" width="400" height="200" />

          <Input
            config={controls.email.elementConfig}
            changed={(e) => inputCHangeHandler(e, "email")}
          />

          <Input
            config={controls.password.elementConfig}
            changed={(e) => inputCHangeHandler(e, "password")}
          />

          <button className="btn btn-primary Login">Login</button>
        </form>
      )}
    </div>
  );
}

export default Auth;
