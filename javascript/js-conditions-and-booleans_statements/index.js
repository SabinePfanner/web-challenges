console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
// if (SUPER_SECRET_PASSWORD) {
//     console.log("Welcome! You are logged in as Brunhilde1084.");
// } else {
//     console.log("Access denied");
// }
const receivedPassword = "password1234";
if (SUPER_SECRET_PASSWORD === receivedPassword) {
    console.log("Welcome! You are logged in as Brunhilde1084.");
} else {
    console.log("Access denied");
}


// Part 2: Even / Odd
const number = 2;
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1111111;

if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
    console.log(numberOfHotdogs * 1.5);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
    console.log(numberOfHotdogs * 1);
} else if (numberOfHotdogs >= 1000000){
    console.log(numberOfHotdogs * 0.1);
} else {
    console.log(numberOfHotdogs * 2);
}

// Part 4: Daytime
const currentHour = 16;

const statement = currentHour >= 17 ? "Partytime!!!" : "Still need to learn...";

console.log(statement);



// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName == "Archibald" ? "Coach" : userName) + "!";

console.log(greeting)

