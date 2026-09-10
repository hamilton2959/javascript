const myText = document.getElementById("myText");
const submitBtn = document.getElementById("submitBtn");
const resultElement = document.getElementById("resultElement");
let age;
let isStudent = true;

submitBtn.onclick = function () {
    age = myText.value;
    age = Number(age);
    if (age >= 18) {
        resultElement.textContent = `You are old enough to drive a car`;
    } else if (age == 0) {
        resultElement.textContent = `You cant drive a car, you were just born`;
    }
    else if (age < 0) {
        resultElement.textContent = `Your age cannot be zero. You are not born yet`;
    } else {
        resultElement.textContent = `You are not old enough to drive a car, you are ${age} years old`;
    }
}





// if (isStudent) {
//     console.log("You are a student");
// } else {
//     console.log("You are not a student");
// }