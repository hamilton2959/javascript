// ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
// Syntax ->     condition ? valueIfTrue : valueIfFalse

// let age = 20;
// let message = age >= 18 ? "You are an adult" : "You are a minor";

// console.log(message); // Output: You are an adult

purchaseAmount = 125;
discount = purchaseAmount > 100 ? 10 : 5;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
