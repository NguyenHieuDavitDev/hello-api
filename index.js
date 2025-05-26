// index.js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Định nghĩa route GET /api/hello
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World from Node.js REST API!" });
});

// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
