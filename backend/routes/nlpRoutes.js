const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getRecommendations } = require("../controllers/nlpController");

router.post("/search", authMiddleware, getRecommendations);

module.exports = router;
