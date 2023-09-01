// 0 - 100

// 0 - 10
// 0 1 2 3 4 5 6
// for (let i = 5; i >= 0; i--) {
//     console.log(i)
// }

/**
 * For Loop
 */
//                       0       1       2        3       4       5        6
// const arrayNames = ["Alex", "Ilay", "Omri", "David", "Ron", "Liran", "Smadar"];
//
// console.log("length -> " + arrayNames.length)
// //          0 1 2 3 4 5 6             6
// for (let i = 0; i < arrayNames.length; i++) {
//     console.log(i + " - " + arrayNames[i]);
// }


/**
 * For Of Loop
 */
//                            0       1       2        3       4       5        6
const arrayNames = ["Alex", "Ilay", "Omri", "David", "Ron", "Liran", "Smadar"];

for (const name of arrayNames) {
    console.log(name)
}

