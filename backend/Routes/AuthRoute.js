const { Signup, Login } = require("../controllers/AuthController");
const {userVerification} = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();
const twilio = require("twilio");

router.post("/signup", Signup);
router.post("/login",Login);
router.post("/",userVerification);
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

let otpStore = {}; // temporary storage

// ✅ Send OTP
router.post("/send-otp", async (req, res) => {
  try {
    const { mobile } = req.body;
    if (!mobile) return res.json({ success: false, message: "Mobile required" });

    // Generate random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    otpStore[mobile] = otp; // save OTP temporarily

    // Send SMS via Twilio
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER, // Twilio number
      to: `+91${mobile}`, // user’s Indian phone number
    });

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    console.error("Twilio Error:", err);
    res.json({ success: false, message: "Failed to send OTP" });
  }
});

// ✅ Verify OTP
router.post("/verify-otp", (req, res) => {
  const { mobile, otp } = req.body;

  if (otpStore[mobile] && otpStore[mobile] == otp) {
    delete otpStore[mobile]; // clear after verification
    return res.json({ success: true, message: "OTP verified successfully" });
  } else {
    return res.json({ success: false, message: "Invalid OTP" });
  }
});

module.exports = router;