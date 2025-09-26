const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// route หลัก
app.get("/", (req, res) => {
  res.send("Hello Coolify + Express 🚀");
});

// route เพิ่ม
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy ✅" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
