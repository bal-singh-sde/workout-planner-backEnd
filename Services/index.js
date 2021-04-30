// method to calulate calories
var axios = require("axios");
if (!process.env.PORT) {
  require("../Secrets");
}

function calorieCalc(gender, height, weight, age, activity) {
  let BMR;
  let totalCalories;
  if (gender === "male") {
    BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 5);
  } else if (gender === "female") {
    BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age - 161);
  } else {
    BMR = 0;
  }

  if (activity === "noExcercise") {
    totalCalories = BMR;
  }

  //1-3 times
  if (activity === "lowActivity") {
    totalCalories = BMR * 1.2;
  }

  // 3-4 times
  if (activity === "active") {
    totalCalories = BMR * 1.35;
  }

  //6-7 times
  if (activity === "high") {
    totalCalories = BMR * 1.55;
  }

  // extreme
  if (activity === "extreme") {
    totalCalories = BMR * 1.95;
  }
  return totalCalories;
}

//bmi
async function bmi(age, weight, height) {
  var options = {
    method: "GET",
    url: "https://fitness-calculator.p.rapidapi.com/bmi",
    params: { age: age, weight: weight, height: height },
    headers: {
      "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    let userBmi = response.data;
    return userBmi;
  } catch (error) {
    console.error(error);
  }
}

//body fat percentage

async function bodyFat(age, gender, weight, heigth, neck, waist, hip) {
  var options = {
    url: "https://fitness-calculator.p.rapidapi.com/bodyfat",
    params: {
      age: parseInt(age),
      gender: gender,
      height: parseInt(heigth),
      weight: parseInt(weight),
      neck: parseInt(neck),
      waist: parseInt(waist),
      hip: parseInt(hip),
    },
    headers: {
      "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    let userInfo = response.data;
    return userInfo;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  calorieCalc,
  bmi,
  bodyFat,
};
