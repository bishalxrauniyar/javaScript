//Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  contactInfo: {
    address: "kalimati",
    phone: "9876543210",
  },
};

// Create a copy
const x = person;

// Change Age in both
x.age = 10;
console.log(person.age);
delete person["age"];
console.log(person.age);
let myString = JSON.stringify(person);
const myArray = Object.values(person);
console.log(myString);
console.log(myArray);
console.log(x.contactInfo.address);

// object with constructor
function PersonNew(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// use new Person() to create many new Person objects
const myFather = new PersonNew("John", "Doe", 50, "blue");
const myMother = new PersonNew("Sally", "Rally", 48, "green");
const mySister = new PersonNew("Anna", "Rally", 18, "green");
const mySelf = new PersonNew("Johnny", "Rally", 22, "green");

// events
// <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
