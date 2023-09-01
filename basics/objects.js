/**
 * Create new object
 */
let user = {
    name: 'Alex',    // string
    age: 34,         // number
    isPassed: true,  // boolean
    languages: {     //object
        russian: 'native',
        english: 'good',
    },
}

/**
 * Print object, keys
 */

//  console.log(user);
//  console.log(typeof user)
// console.log(user.languages.russian);
// console.log(user.isPassed);

/**
 * Add keys to the object
 */

// user.lastName = 'Komanov';
// console.log(user);

/**
 * Key contains to separate words
 */

const anotherUser = {
    name: 'User',    
    age: 35,
    "last name": 'LAST_NAME',        
}

// console.log(anotherUser)

// console.log(anotherUser["last name"])

// anotherUser["current city"] = 'Karmiel';
console.log(anotherUser)

/**
 * Delete Operator
 */

 delete anotherUser.age;
 delete anotherUser["last name"];
console.log(anotherUser)

