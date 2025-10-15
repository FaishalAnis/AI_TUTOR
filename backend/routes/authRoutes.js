const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);



router.get("/me", authMiddleware, async (req, res) => {
  try {
    // req.user may be id (we set decoded.id earlier) — adjust if needed
    const userId = req.user;
    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    console.error("/me error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});
module.exports = router;
