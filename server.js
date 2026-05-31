import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.listen(3000, () => {
  console.log("The server is running");
});