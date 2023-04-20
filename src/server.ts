import express from "express";
import http from "http";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

const server = http.createServer(app);

server.listen(5000, () => {
  console.log("Listening on port...");
});
