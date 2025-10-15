const natural = require("natural");
const TfIdf = natural.TfIdf;

// Helper to clean and normalize text
function cleanText(text) {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, "");
}

// Function to compute similarity between a query and materials
function rankMaterials(query, materials) {
  const tfidf = new TfIdf();
  const docs = materials.map(m => cleanText(m.content + " " + (m.tags || []).join(" ")));

  // Add each material’s text to TF-IDF model
  docs.forEach(doc => tfidf.addDocument(doc));

  const cleanQuery = cleanText(query);
  const queryTokens = cleanQuery.split(" ");

  const scores = [];

  materials.forEach((mat, i) => {
    let score = 0;
    queryTokens.forEach(word => {
      score += tfidf.tfidf(word, i);
    });
    scores.push({ material: mat, score });
  });

  // Sort by descending score
  scores.sort((a, b) => b.score - a.score);

  // Return only materials with positive scores
  return scores
    .filter(s => s.score > 0)
    .map(s => ({
      title: s.material.title,
      link: s.material.link,
      score: s.score.toFixed(4)
    }));
}

module.exports = rankMaterials;
