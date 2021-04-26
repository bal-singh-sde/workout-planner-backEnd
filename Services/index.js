function calorieCalc (gender, height , weight , age, activity) {
    const BMR;
    const totalCalories
    if (gender === 'male') {
        BMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 5);
    } else {
        BMR = Math.round(9.99 * W + 6.25 * H - 4.92 * A - 161);
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