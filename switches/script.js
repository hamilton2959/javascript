let testScore = 95;
let letterGrade;

switch (true) {
    case (testScore >= 90):
        letterGrade = "A";
        break;
    case (testScore >= 80):
        letterGrade = "B";
        break;
    case (testScore >= 70):
        letterGrade = "C";
        break;
    case (testScore >= 60):
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(`Your letter grade is: ${letterGrade}`);

// let day = 5;

// switch (day) {
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     case 7:
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log(`${day} is not a valid day`);
// }