//Syntax: functionName.apply(obj,[arg1,arg2,arg3])

// function introduction(age, city) {
//     console.log(`Name: ${this.name}, Age: ${age}, City: ${city}`);
// }

// const user = { name: "Siddharth" };

// introduction.apply(user, [21, "Vrindavan"])


// const courses = [
//     {
//         skill: "MERN",
//         description: "Full stack developer",
//         duration: "1 year"
//     },
//     {
//         skill: "DSA",
//         description: "Solving Problem with C++,Java",
//         duration: "2 year"
//     },
//     {
//         skill: "GEN AI",
//         description: "Generating new outpur using AI with Gen AI",
//         duration: "6 months"
//     }
// ]

// function showDetails(details) {
//     console.log(`Hi ${this.fullname} you have enrolled to:`);
//     details.map((course) => {
//         console.log(`${course.skill} for ${course.duration}: ${course.description}`);
//     })

// }

// const user1 = { fullname: "Siddharth", address: "Vrindavan", Age: 21 };
// const user2 = { fullname: "Ram", address: "Ayodhya", Age: 6 };

// showDetails.apply(user1, [courses]);
// showDetails.apply(user2, [courses]);


// const number = [10, 20, 30];
// function add(a, b, c) {
//     return a + b + c;
// }
// console.log(add.apply(null, number));