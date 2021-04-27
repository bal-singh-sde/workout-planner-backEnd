const express = require('express')
const { calorieCalc } = require('./Services')

const server = express();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

//GET for calculator endpoint

server.get('/calculator', (req, res) => {
    const { gender, height, weight, age, activity } = req.query;

    const calories = calorieCalc(gender, height, weight, age, activity);
    res.send({calories})
})