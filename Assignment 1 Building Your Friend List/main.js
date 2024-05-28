"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const people = {
    friends: []
};
// 2. Create three separate objects, each representing a friend, with properties like firstName, 
// lastName, and optionally id
let friend1 = {
    firstName: "Ahmed",
    lastName: "'Ali",
    Id: 1
};
let friend2 = {
    firstName: "Aman",
    lastName: "ullah",
    Id: 2
};
let friend3 = {
    firstName: "Awais",
    lastName: "Aftab",
    Id: 3
};
// 3. Add these friend objects to the friends array within the people object.
// ======we are using push method======
people.friends.push(friend1, friend2, friend3);
// 4. Output the entire people object to the console, displaying your information and your 
// friend list.
console.log(people);
