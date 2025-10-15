const express = require("express");
const { createTopic, getTopics } = require("../controllers/topicController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createTopic);
router.get("/", authMiddleware, getTopics);

module.exports = router;
