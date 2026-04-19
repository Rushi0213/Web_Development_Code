// ===============================
// JavaScript Conditional Statements
// ===============================


// 🔷 1. IF STATEMENT
console.log("---- IF STATEMENT ----");

let age =18;

if (age >= 18) {
    console.log("You are eligible to vote");
}


// 🔷 2. IF ELSE
console.log("---- IF ELSE ----");

let marks = 35;

if (marks >= 35) {
    console.log("You passed");
} else {
    console.log("You failed");
}


// 🔷 3. ELSE IF (Multiple Conditions)
console.log("---- ELSE IF ----");

let score = 85;

if (score >= 90) {
    console.log("Grade A+");
} else if (score >= 75) {
    console.log("Grade A");
} else if (score >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}


// 🔷 4. NESTED IF
console.log("---- NESTED IF ----");

let userAge = 20;
let hasID = true;

if (userAge >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Underage");
}


// 🔷 5. TERNARY OPERATOR (Short IF ELSE)
console.log("---- TERNARY ----");

let number = 10;

let result = (number % 2 === 0) ? "Even Number" : "Odd Number";

console.log(result);


// 🔷 6. SWITCH CASE (Alternative to multiple IF)
console.log("---- SWITCH CASE ----");

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


// 🔷 7. PRACTICAL EXAMPLE (Show on Website)

// Get element
let output = document.getElementById("output");

// Example input
let userMarks = 72;

let message = "";

if (userMarks >= 90) {
    message = "Excellent Performance";
} else if (userMarks >= 70) {
    message = "Good Job";
} else if (userMarks >= 50) {
    message = "You Passed";
} else {
    message = "Try Again";
}

// Display result
output.innerHTML = "<h3>Result: " + message + "</h3>";


// 🔷 8. LOGIN CHECK EXAMPLE (Important for projects)
console.log("---- LOGIN CHECK ----");

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}


// 🔷 9. MULTIPLE CONDITIONS (AND / OR)
console.log("---- MULTIPLE CONDITIONS ----");

let temp = 30;

if (temp > 25 && temp < 35) {
    console.log("Weather is pleasant");
}

if (temp < 10 || temp > 40) {
    console.log("Extreme weather");
}
