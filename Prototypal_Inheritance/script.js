class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get basicDetail() {
        return `${this.firstName} ${this.lastName} ${this.age} year old`;
    }
    //Only one Parameter not more than that.
    set changeFullName(value) {
        this.firstName = value.split(' ')[0];
        this.lastName = value.split(' ')[1];
    }
    set changeAge(value) {
        this.age = value;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, std, school) {
        super(firstName, lastName, age);
        this.std = std;
        this.school = school;
    }
    get StudentDetail() {
        return `${super.basicDetail} studing ${this.std} in ${this.school}`
    }
    set StudentDetail(value) {
        this.std = value.split(' ')[0];
        this.school = value.split(' ')[1];
    }
}

const student1 = new Student("Siddharth", "Agrawal", 21, "B.tect", "GLA University");
console.log(student1.StudentDetail);
