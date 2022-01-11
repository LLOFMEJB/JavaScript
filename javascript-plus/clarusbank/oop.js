let prop1 = "name";
let myObj = {};
myObj[prop1] = "harry";
console.log(myObj);

const person1 = {
    name: "harry",
    surname: "potter"
};

// let person2 = person1;
let person2 = {...person1};

person2.name = "james"

console.log(person1)
console.log(person2)

delete this.name

function func1() {
    this.name = "matt";
    // console.log(this.age);
}
const func2 = function() {
    this.age = 40;
    // console.log(this.name);
}

console.log(this.age);
console.log(this.name);
func1();
console.log(this.age);
console.log(this.name);
func2();
console.log(this.age);
console.log(this.name);