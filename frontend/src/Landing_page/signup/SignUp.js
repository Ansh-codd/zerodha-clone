import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [mobile, setMobile] = useState("");
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [usePhone, setUsePhone] = useState(true); // 🔥 toggle between phone/email signup
  const navigate = useNavigate();

  const { username, email, password } = inputValue;

  // 📌 Handle email signup input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // 📌 Handle OTP request
  const handleGetOtp = async () => {
    if (!mobile || mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      const response = await axios.post("https://zerodha-clone-zal5.onrender.com/send-otp", {
        mobile,
      });

      if (response.data.success) {
        alert("OTP sent successfully!");
        navigate("/verify", { state: { mobile } });
      } else {
        alert(response.data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      alert("Server error. Please try again.");
    }
  };

  // 📌 Handle email signup
  const handleEmailSignup = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }
    try {
      const response = await axios.post("https://zerodha-clone-zal5.onrender.com/signup", {
        username,
        email,
        password,
      });
      if (response.data.success) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(response.data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Error in signup:", err);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <h2
          className=" text-center"
          style={{ fontSize: "25px", marginTop: "5%" }}
        >
          Open a free demat and trading account online
        </h2>
        <h5 className="text-muted text-center mt-4 mb-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h5>

        <div className="col-6  mt-5">
          <img
            src="media/signup.png"
            style={{ width: "60%", marginLeft: "30%", marginTop: "5%" }}
            alt="signup"
          />
        </div>

        <div className="col-6 mt-5">
          <h4>Signup now</h4>

          {/* 🔥 Conditional rendering based on toggle */}
          {usePhone ? (
            <>
              {/* Phone number signup */}
              <div
                className="input-group mb-3"
                style={{ maxWidth: "350px" }}
              >
                <span className="input-group-text">
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="India Flag"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  +91
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <button
                className="btn btn-primary w-100"
                style={{ maxWidth: "350px" }}
                onClick={handleGetOtp}
              >
                Get OTP
              </button>

              <div style={{
    marginTop: "10px",
    maxWidth: "350px",
    textAlign: "center",
  }}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setUsePhone(false);
                  }}
                  style={{
                    display: "block",
                    textAlign: "center",
                    color: "#007bff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Continue without phone number
                </a>
              </div>
            </>
          ) : (
            <>
              {/* Email signup */}
              <form
                onSubmit={handleEmailSignup}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  maxWidth: "350px",
                }}
              >
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter username"
                  onChange={handleChange}
                  className="form-control"
                />

                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={handleChange}
                  className="form-control"
                />

                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={handleChange}
                  className="form-control"
                />

                <button className="btn btn-primary w-100" type="submit">
                  Sign Up
                </button>
              </form>

              <div style={{ marginTop: "15px" }}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setUsePhone(true);
                  }}
                  style={{
                    display: "block",
                    textAlign: "center",
                    color: "#007bff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Back to phone number signup
                </a>
              </div>
            </>
          )}

          <p
            className="text-muted mt-4 "
            style={{ fontSize: "90%" }}
          >
            By proceeding, you agree to the Zerodha{" "}
            <a
              href="https://zerodha.com/terms-and-conditions"
              style={{ textDecoration: "none" }}
            >
              terms
            </a>{" "}
            &{" "}
            <a
              href="https://zerodha.com/privacy-policy"
              style={{ textDecoration: "none" }}
            >
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
