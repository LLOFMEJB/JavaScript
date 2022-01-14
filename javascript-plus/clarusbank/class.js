class Person {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.employment = "";
    }
    greet() {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
};