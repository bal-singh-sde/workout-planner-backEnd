// method to calulate calories
function calorieCalc (gender, height , weight , age, activity) {
    let BMR
    let totalCalories;
    if (gender === 'male') {
        BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 5);
    } else if (gender === 'female') {
        BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age - 161);
    }
    else {
        BMR = 0;
    }

    if (activity === 'noExcercise') {
        totalCalories = BMR
    }
    
    //1-3 times
    if (activity === 'lowActivity') {
        totalCalories = BMR*1.2 
    }

    // 3-4 times 
    if (activity === 'active') {
        totalCalories = BMR*1.35
    }

    //6-7 times
    if (activity === 'high') {
        totalCalories = BMR*1.55
    }

    // extreme
    if (activity === 'extreme') {
        totalCalories = BMR*1.95
    }

    return totalCalories
}

module.exports = {
    calorieCalc
}