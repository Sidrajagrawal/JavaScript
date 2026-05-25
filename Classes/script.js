class CreateUser {
    constructor(firstName, lastName, Age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
    }
    getFirstName() {
        return this.firstName + " " + this.LastName;
    }
    getBirthYear() {
        return new Date().getFullYear - this.Age;
    }
}

const user1 = new CreateUser('Siddharth', 'Agrawal', 21);
const user2 = new CreateUser('Ram', 'Sharma', 29);
