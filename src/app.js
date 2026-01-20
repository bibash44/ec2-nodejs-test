const port = 8080;

import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import morgan  from "morgan";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"))
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
