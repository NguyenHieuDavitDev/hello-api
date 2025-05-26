// api/index.js
const express = require("express");
const app = express();

// Route "/" - Trang chủ
app.get("/", (req, res) => {
  res.send("Welcome to Hello World API! Try /api/hello");
});

// Route "/api/hello"
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World from Node.js REST API!" });
});

// Export handler cho Vercel
module.exports = app;
