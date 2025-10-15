require("dotenv").config();
const mongoose = require("mongoose");
const Material = require("../models/Material");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  });

const materials = [
  {
    title: "Introduction to Machine Learning",
    content: "Basics of supervised learning, unsupervised learning, and neural networks.",
    link: "https://www.coursera.org/learn/machine-learning",
    tags: ["machine learning", "AI", "supervised", "unsupervised"]
  },
  {
    title: "Linear Algebra for ML",
    content: "Learn about vectors, matrices, eigenvalues, and their role in ML.",
    link: "https://www.khanacademy.org/math/linear-algebra",
    tags: ["math", "linear algebra", "matrix"]
  },
  {
    title: "Probability and Statistics",
    content: "Understanding data distributions, probability, and hypothesis testing.",
    link: "https://www.edx.org/course/statistics-and-probability",
    tags: ["probability", "statistics", "data"]
  }
];

async function seed() {
  try {
    console.log("🚀 Seeding started...");
    await Material.deleteMany({});
    await Material.insertMany(materials);
    console.log("✅ Sample materials inserted successfully");
  } catch (err) {
    console.error("❌ Seeding error:", err);
  } finally {
    await mongoose.connection.close();
    console.log("🔒 MongoDB connection closed");
    process.exit(0);
  }
}

seed();
