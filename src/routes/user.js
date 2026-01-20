import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log(`User payload ${req.body}`);
  res.json({
    msg: "Hello from user",
    body: req.body,
  });
});

export default app;
