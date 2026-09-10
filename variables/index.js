// let age = 20;
// let firstName = "Hamilton";

// let online = false;
// let forSale = true;

// console.log(`Hello ${firstName}, you are ${age} years old`);

// console.log(`Is ${firstName} online? : ${online}`);
// console.log(`Is this car for sale: ${forSale}`);

// document.getElementById("p1").textContent = firstName;

let fullName = "Hamilton Migwambo";
let age = 20;
let isStudent = true;

document.getElementById("p1").textContent = `Hello ${fullName}, you are ${age} years old`;
document.getElementById("p2").textContent = `Is ${fullName} a student? : ${isStudent}`;
document.getElementById("p3").textContent = `Is ${fullName} online? : ${!isStudent}`;
