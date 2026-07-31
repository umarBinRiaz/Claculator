// Grade Calculator in JavaScript

let marks = Number(prompt("Enter your marks (0-100):"));

let grade;

if (marks >= 90) {
    grade = "A+";
} else if (marks >= 80) {
    grade = "A";
} else if (marks >= 70) {
    grade = "B";
} else if (marks >= 60) {
    grade = "C";
} else if (marks >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Your Grade: " + grade);
alert("Your Grade: " + grade);