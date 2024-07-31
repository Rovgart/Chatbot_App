import React from "react";
import { fetchLogin } from "../actions";
import LoginForm from "../components/Form/LoginForm";
import InputField from "../components/TextFields/InputField";
import { login } from "../lib/lib";

const Login = () => {
  return <LoginForm />;
};

export default Login;
