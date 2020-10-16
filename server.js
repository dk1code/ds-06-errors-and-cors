const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());

app.get("/getme", (req, res) => {
  res.send(fruits);
});

app.post("/postme", (req, res) => {
  res.send({});
});

app.get("/fuckup/saw-it-coming", (req, res, next) => {
  try {
    test;
  } catch (err) {
    next(err)
  }
});

app.get("/fuckup/surprise", (req, res) => {
  throw new Error("Error thrown")
});

app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.url} does not exist` });
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});

//Run app, then load http://localhost:5000 in a browser to see the output.
