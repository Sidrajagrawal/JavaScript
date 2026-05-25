// const user = {
//     firstName: "Siddharth",
//     lastName: "Agrawal",
//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     },
//     set fullName(value) {
//         const splitedValue = value.split(' ');
//         this.firstName = splitedValue[0];
//         this.lastName = splitedValue[1];
//     }
// }

// console.log(user.fullName);
// user.fullName = "Ram Sharma";
// console.log(user.fullName);

class CreateUser {
    constructor(firstName, lastName, Age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
    }
    get FullName() {
        return this.firstName + " " + this.lastName;
    }
    set FullName(value) {
        const splitedValue = value.split(' ');
        this.firstName = splitedValue[0];
        this.lastName = splitedValue[1];
    }

    get BirthYear() {
        return new Date().getFullYear - this.Age;
    }
}

const user1 = new CreateUser('Siddharth', 'Agrawal', 21);
const user2 = new CreateUser('Ram', 'Sharma', 29);

console.log(user1.FullName);
user1.FullName = "Krishna Gautam"
console.log(user1.FullName);