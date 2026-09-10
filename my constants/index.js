// const = A variable that cannot be reassigned / changed

const PI = 3.142;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}

// radius = window.prompt("Enter the radius of the circle: ");
// radius = Number(radius);

// circumference = 2 * pi * radius;

// window.alert("The circumference of the circle is: " + circumference);

// console.log("The circumference of the circle is: " + circumference);