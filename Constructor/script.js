//Here this point to global (window);
// function A() {
//     console.log(this);
// }
// A()

//Here this points to User
// function createUser(firstName, lastName, Age) {
//     const user = {
//         firstName,
//         lastName,
//         Age,
//         getBirthYear() {
//             return new Date().getFullYear() - this.Age;
//         }
//     }
//     return user;
// }
// const user1 = createUser("Ram", "Sharma", 32);
// const user2 = createUser("Shyam", "Sharma", 30);

//Here user1 create getBirthYear function in different location and user2 in different location
//Not a good Approach because both are common method
// console.log(user1.getBirthYear === user2.getBirthYear);

//Method 1 to create common method one time(like getBirthYear)
// function createUser(firstName, lastName, Age) {
//     const user = {
//         firstName,
//         lastName,
//         Age,
//         getBirthYear: createUser.commonMethods.getBirthYear
//     }
//     return user;
// }
// createUser.commonMethods = {
//     getBirthYear() {
//         return new Date().getFullYear - this.age;
//     }
// }

// const user1 = createUser('Sid',"Ag",21);
// const user2 = createUser('Ram','Sharma',22);

// This way we add common Methods(getBirthYear) in function not to  user Object so when ever new User created 
//common method of function also passes to user
// console.log(user1.getBirthYear === user2.getBirthYear);


//Method2 using Constructor
// function CreateUser(firstName, lastName, Age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.Age = Age;
// }

// CreateUser.prototype.getBirthYear = function () {
//     return new Date().getFullYear() - this.Age;
// }

// CreateUser.prototype.getFullName = function () {
//     return this.firstName + " " + this.lastName;
// }

// const user1 = new CreateUser('Sid', 'Ag', 21);
// const user2 = new CreateUser('Ram', 'Sharma', 29);
// console.log(user1.getBirthYear());
// console.log(user2.getBirthYear());
// console.log(user1.getFullName());
// console.log(user2.getFullName());