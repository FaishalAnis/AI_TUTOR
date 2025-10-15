const Material = require("../models/Material");
const rankMaterials = require("../utils/textSimilarity");

exports.getRecommendations = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ msg: "Query is required" });
    }

    // Fetch only the fields we actually need
    const materials = await Material.find({}, "title content tags link");

    // Rank them using your similarity utility
    const ranked = rankMaterials(query, materials);

    // Include link in each recommendation result
    const recommendations = ranked.slice(0, 5).map(item => ({
      title: item.title,
      link: item.link,        // ✅ new field
      score: item.score
    }));

    res.json({ query, recommendations });
  } catch (err) {
    console.error("NLP error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
