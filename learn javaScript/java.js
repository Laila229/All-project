// 1. Ask the user for basic info
let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let favColor = prompt("What is your favorite color? (red/blue/green/yellow)");
let grade = Number(prompt("Enter your grade from 0 to 100:"));
let day = prompt("Enter a day of the week (e.g. monday)");

// --------------------------------------------------------
//  IF statement
if (age >= 18) {
  alert(`${name}, you are an adult.`);
}

// --------------------------------------------------------
// IF...ELSE
if (age >= 18) {
  alert("You are allowed to enter.");
} else {
  alert("You are not allowed to enter.");
}

// --------------------------------------------------------
//  ELSE IF
if (grade >= 90) {
  alert("Your grade is: Excellent");
} else if (grade >= 80) {
  alert("Your grade is: Very Good");
} else if (grade >= 70) {
  alert("Your grade is: Good");
} else if (grade >= 60) {
  alert("Your grade is: Accepted");
} else {
  alert("Your grade is: Failed");
}

// --------------------------------------------------------
// Nested IF
if (age >= 18) {
  if (grade >= 90) {
    alert("Adult with excellent grade — impressive!");
  } else {
    alert("Adult with normal grade.");
  }
} else {
  if (grade >= 90) {
    alert("Young and excellent student!");
  } else {
    alert("Young student.");
  }
}

// --------------------------------------------------------
// 6. IF with multiple conditions (AND / OR)
if (age >= 18 && favColor === "red") {
  alert("You are an adult who loves red!");
}

if (favColor === "blue" || favColor === "green") {
  alert("You chose a calm color!");
}

// --------------------------------------------------------
// SWITCH statement
switch (favColor) {
  case "red":
    alert("Red is the color of passion!");
    break;

  case "blue":
    alert("Blue is the color of the sky!");
    break;

  case "green":
    alert("Green is nature's color!");
    break;

  case "yellow":
    alert("Yellow is bright like the sun!");
    break;

  default:
    alert("Interesting color choice!");
}

// --------------------------------------------------------
// SWITCH
switch (day.toLowerCase()) {
  case "monday":
    alert("Start of the week! Be productive!");
    break;
  case "friday":
    alert("Weekend is coming!");
    break;
  case "saturday":
  case "sunday":
    alert("Weekend vibes!");
    break;
  default:
    alert("Just a normal day!");
}

// --------------------------------------------------------
// 9. Final summary
alert(`
Summary:
==========
Name: ${name}
Age: ${age}
Favorite color: ${favColor}
Grade: ${grade}
Day input: ${day}

All conditional statements tested successfully!
`);
