const express = require("express");
const { calorieCalc, bmi, bodyFat } = require("./Services");
const cors = require("cors");

const server = express();
server.use(cors());

server.use(express.json());

// for urlencoded body as
server.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//GET for calculator endpoint

server.get("/calculator", (req, res) => {
  const { gender, height, weight, age, activity } = req.query;

  const calories = calorieCalc(gender, height, weight, age, activity);
  res.send({ calories });
});

// bmi
server.get("/bmi", async (req, res) => {
  const { height, weight, age } = req.query;

  var results = await bmi(age, weight, height);
  console.log(results);
  res.send({ results });
});

//body weight

server.get("/bodyFat", async (req, res) => {
  const { height, weight, gender, age, neck, hip, waist } = req.query;

  var results = await bodyFat(age, gender, weight, height, neck, hip, waist);
  console.log(results);
  res.send({ results });
});
