// this -> Window(global)
// console.log(this);

//this->Window(global)
// function hii() {
//     console.log(this);
// }
// hii();


//this -> user(object)
// const user = {
//     firstName: "Siddharth",
//     lastName: "Agrawal",
//     fullName() {
//         console.log(this);
//         return this.firstName + " " + this.lastName
//     }
// }


//this -> Window(global)
// const user = {
//     firstName: "Siddharth",
//     lastName: "Agrawal",
//     fullName() {
//         function hii() {
//             console.log(this);
//         }
//         hii();
//     }
// }


//By Passing "this" inside the forEach Function it points to user object
// const user = {
//     firstName: "Siddharth",
//     lastName: "Agrawal",
//     skills: ['MERN', 'PYTHON', 'GENAI', 'DSA'],
//     getSkill() {
//         this.skills.forEach(function (skill) {
//             console.log(`${this.firstName} knows ${skill}`);
//         }, this)
//     }
// }

// Here this is Constructor Method
//this -> Hi
// function Hi() {
//     console.log(this);
// }
// new Hi();


// here, this->h1
// const h1 = document.querySelector('h1');
// h1.addEventListener('click', function () {
//     console.log(this);
// })


//In case of Arrow Functions it mostly point to Windows(global)
//because the defination of arrow function says that
// Arrow functions don't have their own bindings to "this", arguments, or super,
// and should not be used as "methods".
//THIS -> windown(global)
// const user = {
//     firstName: "Siddharth",
//     lastName: "Agrawal",
//     fullName: () => {
//         console.log(this);
//     }
// }


//This -> User
// class User {
//     constructor() {
//         this.firstName = "Siddharth"
//         console.log(this);
//     }
//     getUser() {
//         console.log(this);
//     }
// }