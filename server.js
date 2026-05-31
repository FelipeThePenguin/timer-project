import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.render("dist/index");
});

app.listen(3000, () => {
  console.log("The server is running");
});