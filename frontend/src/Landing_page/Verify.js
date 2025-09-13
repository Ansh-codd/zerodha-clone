import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Verify() {
  const location = useLocation();
  const mobile = location.state?.mobile || "";
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:3002/verify-otp", {
        mobile,
        otp,
      });
      if (res.data.success) {
        setStep(2);
        setMessage("OTP verified ✅ Now enter your details");
      } else {
        setMessage("Invalid OTP");
      }
    } catch {
      setMessage("Server error");
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFinalSignup = async () => {
    try {
      const res = await axios.post("http://localhost:3002/signup", {
        mobile,
        ...formData,
      });
      if (res.data.success) {
        setMessage("Signup successful 🎉 You can now login.");
      } else {
        setMessage(res.data.message || "Signup failed");
      }
    } catch {
      setMessage("Server error");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center">Verify Mobile</h3>
      <p className="text-center">Mobile: +91 {mobile}</p>

      {step === 1 && (
        <div>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="btn btn-success w-100" onClick={handleVerifyOtp}>
            Verify OTP
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control mb-3"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="btn btn-primary w-100" onClick={handleFinalSignup}>
            Complete Signup
          </button>
        </div>
      )}

      {message && <p className="mt-3 text-danger text-center">{message}</p>}
    </div>
  );
}

export default Verify;
