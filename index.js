require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user-routes");
const { authorize } = require("./middleware/authorize");
const jwt = require("jsonwebtoken");

const { PORT, CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to my API");
});

// app.get(
//   "/movies",
//   (req, res, next) => {
//     const splitAuthorizationHeader = req.headers.authorization.split(" ");
//     if (splitAuthorizationHeader.length !== 2) {
//       return res.status(403).json({
//         message: "Endpoint requires bearer token",
//       });
//     }

//     const bearerToken = splitAuthorizationHeader[1];

//     jwt.verify(bearerToken, process.env.SECRET_KEY, (error, decoded) => {
//       if (error) {
//         return res.status(403).json({
//           message: "Invalid JWT",
//         });
//       }

//       req.decoded = decoded;

//       next();
//     });
//   },
//   (req, res) => {
//     res.json(req.decoded);
//   }
// );

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
