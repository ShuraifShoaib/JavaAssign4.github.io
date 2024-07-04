// Take base and power from user
const base = parseInt(prompt("Enter the base number:"));
const power = parseInt(prompt("Enter the power:"));

// Calculate the result
let result = 1;
for (let i = 0; i < power; i++) {
    result *= base;
}

// Display the result in an alert
alert(`The result of ${base} raised to the power of ${power} is ${result}`);
