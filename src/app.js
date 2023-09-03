const express = require('express')
const app = express()
const cors = require("cors");
const port = 3000;

const mainRoute = require('./api/route')

const middlewares = [
  cors({ origin: "*", optionsSuccessStatus: 204, methods: "POST" }),
  express.json(),
  express.urlencoded({ extended: true }),
];

app.use(middlewares);

// invocation of route
app.use("/", mainRoute);

// Match with non existing routes
app.use("*", (req, res, next) => {
  res.status(404).json({ message: "Non route under that path o method" });
});

app.listen(port, async (item) => {
  console.log(`listening on ${port}`);
})

