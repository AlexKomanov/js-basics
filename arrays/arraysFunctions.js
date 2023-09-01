

/**
 * toString()
 */

// let arrayNames = ["Alex", "Ilay", "Omri", "David", "Ron", "Liran"];
// console.log(arrayNames.toString());
// console.log(arrayNames);

/**
 * join()
 */

// let arrayNames = ["Alex", "Ilay", "Omri", "David", "Ron", "Liran"];
// console.log(arrayNames.join(' * '));
// console.log(arrayNames);


/**
 * pop()
 */

// let arrayNames = ["Alex", "Ilay", "Omri", "David", "Ron", "Liran"];
// const removedElement = arrayNames.pop();
// console.log("removedElement => ", removedElement);
// console.log(arrayNames);


/**
 * push()
 */

// let arrayNames = ["Alex", "Ilay", "Omri", "David", "Ron", "Liran"];

// console.log("length => ", arrayNames.length);

// const newLength = arrayNames.push("Yan");
// console.log("newLength => ", newLength);
// console.log(arrayNames);

/**
 * shift()
 */

// let arrayNames = ["Alex", "Ilay", "Omri", "David", "Ron", "Liran"];
// console.log("arrayNames[1] ==> ", arrayNames[1])
// const removedElement = arrayNames.shift();

// console.log("removedElement => ", removedElement);
// console.log(arrayNames);
// console.log("arrayNames[1] ==> ", arrayNames[1])


/**
 * unshift()
 */

// let arrayNames = ["Alex", "Ilay", "Omri", "David", "Ron", "Liran"];

// console.log("length => ", arrayNames.length);

// const newLength = arrayNames.unshift("Yan");
// console.log("newLength => ", newLength);
// console.log(arrayNames);

/**
 * Changing value of element
 */

// let arrayNames = ["Alex", "Ilay", "Omri", "David", "Ron", "Liran"];

// console.log(arrayNames);

// arrayNames[0] = "Yan";

// console.log(arrayNames);

/**
 * concat()
 */

let array1 = ["Alex", "Ilay", "Omri"];
let array2 = ["David", "Ron", "Liran"];
let array3 = ["Yan", "Nitzan", "Keinar", "Smadar"];

const newList = array1.concat(array2);
console.log("--- array1.concat(array2) ---")
console.log(newList);
console.log('array1 -> ', array1)
console.log('array2 -> ', array2)

// const fullList = array1.concat(array2, array3);
// console.log("--- array1.concat(array2, array3) ---")
// console.log(fullList);

// const finalResult = fullList.concat("Hila");
// console.log("--- fullList.concat('Hila') ---")
// console.log(finalResult);

/**
 * slice()
 */
//                  0        1       2       3       4       5
// let arrayNames = ["Alex", "Ilay", "Omri", "David", "Ron", "Liran"];

// const newTeam = arrayNames.slice(2);
// console.log("--- arrayNames.slice(2) ---")
// console.log(newTeam);

// const newSubTeam = arrayNames.slice(2, 5);
// console.log("--- arrayNames.slice(2, 5) ---")
// console.log(newSubTeam);


// console.log(arrayNames);