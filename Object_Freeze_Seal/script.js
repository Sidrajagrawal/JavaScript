const { use } = require("react");

const user = {
    firstName: "Siddharth",
    lastName: "Agrawal",
    address: "Vrindavan",
    phone: "123456789",
    state: "Uttar Pradesh",
    more_details: {
        skills: ["MERN", "GENAI", "DSA", "JAVA", "PYTHON"]
    }
}

// Object.seal(user);
// console.log(delete user.firstName); // false
// user.firstName = 'Ram' //allowed

Object.freeze(user);
console.log(delete user.firstName); // false
// user.firstName = 'Ram' // not allowed
