const express = require("express");
const userRouter = require("./routes/user");
const bodyParser = require("body-parser");
const client = require("prom-client");

const app = express();
const port = process.env.PORT || 3000;

const db = require("./dbClient");
db.on("error", (err) => {
  console.error(err);
});

const register = new client.Registry();

register.setDefaultLabels({
  app: "userapi-app",
});

client.collectDefaultMetrics({ register });

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.use("/user", userRouter);

const server = app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening the port " + port);
});

module.exports = server;
