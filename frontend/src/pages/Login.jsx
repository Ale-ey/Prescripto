import React, { useState } from "react";

export const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onSumbit = async (e) => {
    e.preventDefault();
  };

  return (
    <form action="submit" className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto item-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "login"} sign up to book
          appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              required={true}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.name)}
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required={true}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.name)}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required={true}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.name)}
          />
        </div>
        <button className="bg-primaryBlue text-white w-full py-2 rounded-md text-base cursor-pointer">
          {state === "Sign Up" ? "Sign Up" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-primaryBlue underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an new account?
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-primaryBlue underline cursor-pointer"
            >
              {" "}
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};
