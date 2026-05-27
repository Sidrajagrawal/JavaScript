// const user = {
//     firstName: "Siddharth",
//     greet() {
//         console.log(this.firstName);
//     }
// }

// const greeting = user.greet
// greeting.call(user)

// call -> functionName.call(obj, arg1, agr2);
// function sayHii() {
//     console.log(`Hello ${this.firstName} ${this.lastName}`);
// }
// const user1 = {
//     firstName: "Siddharth",
//     lastName: "Agrawal"
// }
// const user2 = {
//     firstName: "Ram",
//     lastName: "Sharma"
// }
// sayHii.call(user1);
// sayHii.call(user2);



//2nd Way
// const user1 = {
//     fullName: "Siddharth Agrawal",
//     greet() {
//         console.log(`Hello ${this.fullName}`);
//     }
// }
// const greetUser = user1.greet;
// greetUser.call(user1);


//3rd way
// const user1 = {
//     fullName: "Siddharth Agrawal",
//     greet() {
//         console.log(this);
//         console.log(`Hello ${this.fullName}`);
//     }
// }
// const user2 = { fullName: "Rahul Gautam" };
// user1.greet.call(user2)