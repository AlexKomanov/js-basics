let myArray = ["Alex", "Omri", "Yan", "Alexander", "Keinar"];

console.log(myArray)

console.log("Index 0 - " + myArray[0])
console.log("Index 6 - " + myArray[6])
console.log("length = " + myArray.length)

myArray[50] = "John";
myArray.forEach(item => console.log(item))