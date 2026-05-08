import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "") return;

    localStorage.setItem("user", username);

    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[350px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-400 p-3 rounded-lg outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-500 text-white py-3 rounded-lg mt-5 hover:bg-red-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;