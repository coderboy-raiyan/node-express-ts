import express from "express";
import http from "http";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "we are ready to go 🚀" });
});

const server = http.createServer(app);

server.listen(5000, () => {
  console.log("Listening on port...");
});
