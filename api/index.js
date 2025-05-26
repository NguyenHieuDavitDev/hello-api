// api/index.js
const express = require("express");
const app = express();

// Route "/" - Trang chủ
app.get("/", (req, res) => {
  res.send("Welcome to Nhóm R5 kiểm thử API Node.js!");
});

// Route "/api/hello"
app.get("/api/hello", (req, res) => {
  res.json({ message: "Nhóm R5 kiểm thử API Node.js!" });
});

// Export handler cho Vercel
module.exports = app;
