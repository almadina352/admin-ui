import React from "react";
import Logo from "../Elements/Logo";

function AuthLayout(props) {
  const { children, title } = props;
  
  return (
    <>
      <main className="min-h-screen bg-special-mainBg flex justify-center items-center p-4">
        <div className="w-full max-w-100">
          
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {title}
          </h1>

          {children}

        </div>
      </main>
    </>
  );
}

export default AuthLayout;