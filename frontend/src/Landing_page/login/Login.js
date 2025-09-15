import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-clone-zal5.onrender.com/login",
        { ...inputValue },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess("Login successful ✅"); // 👈 Always show success text
        localStorage.setItem("token", data.token); // store JWT or session toke
        window.location.href = `https://zerodha-clone-2-e7y4.onrender.com?token=${data.token}`;
      } else {
        handleError(message || "Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      handleError("Server error. Please try again.");
    }
    setInputValue({ email: "", password: "" });
  };

  return (
    <div
      className="form_container"
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Login Account
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="email"
            style={{ marginBottom: "5px", fontWeight: "bold", color: "#555" }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="password"
            style={{ marginBottom: "5px", fontWeight: "bold", color: "#555" }}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Submit
        </button>

        <span
          style={{ fontSize: "14px", textAlign: "center", marginTop: "10px" }}
        >
          Don’t have an account?{" "}
          <Link
            to={"/signup"}
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Signup
          </Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
