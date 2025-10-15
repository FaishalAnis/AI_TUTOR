const Topic = require("../models/Topic");

// Create a new topic
exports.createTopic = async (req, res) => {
  try {
    const { title, description } = req.body;

    const topic = new Topic({
      title,
      description,
      createdBy: req.user
    });

    await topic.save();
    res.status(201).json(topic);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get all topics for a user
exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find({ createdBy: req.user }).sort({ createdAt: -1 });
    res.json(topics);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
