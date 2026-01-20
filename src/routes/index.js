import express from "express";
const app = express();
import user from './user.js'
app.use("/user", user);

app.get("/", (req, res) => {
  res.json({
    msg: "Hello from ec2",
  });
});

export default app;
