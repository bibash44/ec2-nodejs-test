const port = 8080;

import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);

app.use(routes);

app.listen(port, () => {
  console.log(`Seerver is listening on port ${port}`);
});
