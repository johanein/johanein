const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/user", (req, res) => {
    const {
      body: { username, password },
    } = req || {};
    if (username === "albert" && password === "lify") {
      res.json({
        result: true,
      });
    } else {
      res.json({
        result: false,
      });
    }
  });
  app.get("*", (req, res) => {
    res.json("no route available");
  });

const PORT = 3001;
app.listen(PORT);