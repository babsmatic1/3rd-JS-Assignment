function bmiCalculator(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
      return `Your BMI is ${bmi.toFixed(2)}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return `Your BMI is ${bmi.toFixed(2)}, so you have a normal weight.`;
    } else {
      return `Your BMI is ${bmi.toFixed(2)}, so you are overweight.`;
    }
  }

  let message = bmiCalculator(70, 1.75);

  confirm(message)

var age = 12;
var accompanied = true;

if (age >= 13) {
  console.log("You are allowed to see the movie.");
} else if (accompanied) {
  console.log("You are allowed to see the movie with an adult.");
} else {
  console.log("You are not allowed to see the movie.");
}
