// ===============================
// JavaScript Looping Examples
// ===============================


// 🔷 1. FOR LOOP (Basic)
console.log("---- FOR LOOP ----");

for (let i = 1; i <= 5; i++) {
    console.log("Number is: " + i);
}


// 🔷 2. WHILE LOOP
console.log("---- WHILE LOOP ----");

let count = 1;

while (count <= 5) {
    console.log("Count is: " + count);
    count++;
}


// 🔷 3. DO WHILE LOOP
console.log("---- DO WHILE LOOP ----");

let num = 1;

do {
    console.log("Value is: " + num);
    num++;
} while (num <= 5);


// 🔷 4. LOOP THROUGH ARRAY (Important in real projects)
console.log("---- ARRAY LOOP ----");

let skills = ["HTML", "CSS", "JavaScript", "Bootstrap", "SQL"];

for (let i = 0; i < skills.length; i++) {
    console.log("Skill: " + skills[i]);
}


// 🔷 5. FOR...OF LOOP (Modern way)
console.log("---- FOR OF LOOP ----");

for (let skill of skills) {
    console.log("Skill using for...of: " + skill);
}


// 🔷 6. PRACTICAL EXAMPLE (Show data on webpage)

// Get element from HTML
let output = document.getElementById("output");

// Create empty string
let result = "<h3>My Skills</h3>";

// Loop through skills array
for (let i = 0; i < skills.length; i++) {
    result += "<p>" + (i + 1) + ". " + skills[i] + "</p>";
}

// Display on webpage
output.innerHTML = result;


// 🔷 7. NESTED LOOP (Important concept)
console.log("---- NESTED LOOP ----");

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i = " + i + ", j = " + j);
    }
}


// 🔷 8. PATTERN PROGRAM (Common interview logic)
console.log("---- PATTERN ----");

let pattern = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    pattern += "\n";
}

console.log(pattern);


// 🔷 9. BREAK & CONTINUE
console.log("---- BREAK & CONTINUE ----");

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue; // skip 5
    }

    if (i === 8) {
        break; // stop loop at 8
    }

    console.log(i);
}