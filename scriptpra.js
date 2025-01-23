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

let v = "JohnTheDon"; // x is a string
let y = new String("John"); // y is an object
console.log(typeof v);
console.log(typeof y);
// here v ==== y false
console.log(v === y);
// here v ==== y True
console.log(v == y);

// The charAt() method returns the character at a specified index (position) in a string:
console.log(v.charAt(0)); // J
console.log(v.charCodeAt(0)); // 74
console.log(v.slice(2, 5)); // hnT
console.log(v.slice(-4)); // eDon
console.log(v.slice(-8, -4)); //hnTh
console.log(v.substring(0, 4)); //John
console.log(v.toUpperCase()); //JOHNTHEDON
console.log(v.toLowerCase()); //johnthedon

// string concat ( + or concat())
let text1 = "Hello" + " " + "World!";
console.log(text1);
let text2 = "Hello".concat(" ", "World!");
console.log(text2);

//The trim() method removes whitespace from both sides of a string:
// only works for left and right whitespaces not for space in between words
let text3 = "         bishal Rauniyar   ";
let text4 = text3.trim();
console.log(text4); //bishal Rauniyar

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// The padStart() method is a string method.
// To pad a number, convert the number to a string first.
//The padStart() method pads a string from the start.
let numb = 5;
let text5 = numb.toString();
let paddedStart = text5.padStart(4, "0");
console.log(paddedStart); //0005

//The padEnd() method pads a string from the end.
let paddedEnd = text5.padEnd(4, "0");
console.log(paddedEnd); //5000

//The repeat() method returns a string with a number of copies of a string.
let text6 = "codepixelzmeida";
console.log(text6.repeat(2)); //codepixelzmeidacodepixelzmeida

//By default, the replace() method replaces only the first match:
let text7 = "Bishal Kumar";
console.log(text7.replace("Kumar", "Rauniyar")); //Bishal Rauniyar

//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

let text8 = "I love cats. Cats are very easy to love. Cats are very popular";
text8 = text8.replaceAll(/Cats/g, "Dogs");
text8 = text8.replaceAll(/cats/g, "dogs");
console.log(text8);

//A string can be converted to an array with the split() method:

let text9 = "Bishal Rauniyar";
console.log(text9.split(" "));
//The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text10 = "Bishal Rauniyar Rauniyar";
console.log(text10.indexOf("Rauniyar")); //7
console.log(text10.indexOf("Rauniyar", 17)); //-1 as the search starts from index 17
console.log(text10.lastIndexOf("Rauniyar")); //16

//match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
let text11 = "The rain in SPAIN stays mainly in the plain";
console.log(text11.match(/ain/g)); // [ 'ain', 'ain', 'ain' ](globle)
console.log(text11.match(/ain/gi)); // [ 'ain', 'AIN', 'ain', 'ain' ] gi(globle and case insensitive)
console.log(text11.match("ain"));

//The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).\
let text12 = "cats and dogs Dogs and Cats";
console.log(...text12.matchAll(/cats/gi)); // global and case insensitive
console.log(...text12.matchAll("cats"));
console.log(...text12.matchAll(/cats/g)); // global

//Template Strings use back-ticks (``)
let name = "John";
let age = 25;
let sentence = `My name is ${name}. I am ${age} years old.`;
console.log(sentence);
{
  let x = 0.2;
  let y = 0.1;
  let z = x + y;
  console.log(z); //0.30000000000000004
  console.log(z.toFixed(2)); //0.30
  console.log(x * 10 + (y * 10) / 100); //0.3
}
// JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.
{
  let x = 5 + 5;
  let y = "5" + 5;
  let z = "Hello" + 5;
  console.log(x); //10
  console.log(y); //55
  console.log(z); //Hello5
}
//NaN is a JavaScript reserved word indicating that a number is not a legal number.

{
  let x = 100 / "Apple";
  let y = 100 / "100";
  let z = 100 / "10";
  console.log(x); //NaN
  console.log(y); //1
  console.log(z); //10
}
//type of NaN is number
{
  let x = 100 / "Apple";
  console.log(typeof x); //number
  console.log(x);
}
//Infinity is a number in JavaScript.
{
  let x = 2 / 0;
  console.log(x); //Infinity
  console.log(typeof x); //number
}

//The toString() method returns a number as a string.
{
  let x = 123;
  console.log(x.toString());
  console.log((123).toString());
  console.log((100 + 23).toString());
}
// toExponential() returns a string, with a number rounded and written using exponential notation.
{
  let x = 9.656;
  let y = 119;
  console.log(x.toExponential()); //9.656e+0
  console.log(x.toExponential(2)); //9.66e+0
  console.log(y.toExponential(2)); //1.19e+2
}

//toFixed() returns a string, with the number written with a specified number of decimals:
{
  let x = 9.656;
  let y = 119;
  console.log(x.toFixed()); //10
  console.log(x.toFixed(2)); //9.66
  console.log(y.toFixed(2)); //119.00
}

//toPrecision() returns a string, with a number written with a specified length:
{
  let x = 9.656;

  console.log(x.toPrecision()); //9.656
  console.log(x.toPrecision(2)); //9.7 (rounds up)
}
