const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = parseFloat(textBox.value);
        result.textContent = `${temp}°C = ${((temp * 9 / 5) + 32).toFixed(2)}°F`;
    } else if (toCelsius.checked) {
        temp = parseFloat(textBox.value);
        result.textContent = `${temp}°F = ${((temp - 32) * 5 / 9).toFixed(2)}°C`;
    } else {
        result.textContent = "Select a unit";
    }
}