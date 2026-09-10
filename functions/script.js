// function happyBirthday(username, age) {
//     console.log(`Happy birthday`);
//     console.log(`Happy Birthday dear ${username}`);
//     console.log(`Happy birthday to you!`);
//     console.log(`You are ${age} years old`)
// }

// happyBirthday("Hamilton", 8);

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

console.log(add(4, 5));
console.log(subtract(9, 3));

function isEven(number) {
    // if (number % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    return number % 2 === 0 ? true : false;
}

console.log(isEven(22));

function isValidEmail(Email) {
    return Email.includes("@") ? true : false;
}

console.log(isValidEmail("migwambohamilton42@gmail.com"));
console.log(isValidEmail("joeham22.com"));