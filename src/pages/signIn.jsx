import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";

function SignIn() {
  const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
      console.log(refreshToken);
      localStorage.setItem("token", refreshToken);
    } catch (err) {
      console.error(err.msg);
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />
    </AuthLayout>
  );
}

export default SignIn;