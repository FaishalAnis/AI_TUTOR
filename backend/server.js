require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const topicRoutes = require("./routes/topicRoutes");
const profileRoutes = require("./routes/authRoutes"); // or separate file

const app = express();
const nlpRoutes = require("./routes/nlpRoutes");


// ✅ Middleware - must come before routes
app.use(express.json());          // <--- VERY IMPORTANT
app.use(express.urlencoded({ extended: true })); // helps with form data too
app.use(cors());
app.use(morgan("dev"));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/nlp", nlpRoutes);

// ✅ Start Server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
