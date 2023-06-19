require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user-routes");

const { PORT, CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to my API");
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
