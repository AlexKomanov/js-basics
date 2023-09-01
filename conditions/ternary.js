let age = 25;
// let message;
// if (age > 18) {
//     message = "You're adult";
// }
// else {
//     message = "You are under 18";
// }

let message = (age > 18) ? "You're adult" 
            : (age == 18) ? "You're 18 years old" 
            : "You are under 18";

console.log(message);
