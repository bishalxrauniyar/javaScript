// counter app
var count = 0;
document.getElementById("counter").innerHTML = count;
increment.onclick = function () {
  count += 1;
  document.getElementById("counter").innerHTML = count;
};
decrement.onclick = function () {
  if (count > 0) {
    count -= 1;
    document.getElementById("counter").innerHTML = count;
  }
};
reset.onclick = function () {
  count = 0;
  document.getElementById("counter").innerHTML = count;
};

//example 1

// Get the current date and time
var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = hour >= 12 ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
hour = hour >= 12 ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}

// Display the current time
console.log(
  "Current Time: " + hour + prepand + " : " + minute + " : " + second
);

//Examople 2

// console different date formats
// Get the current date
var today = new Date();

// Get the day of the month
var dd = today.getDate();

// Get the month (adding 1 because months are zero-based)
var mm = today.getMonth() + 1;

// Get the year
var yyyy = today.getFullYear();

// Add leading zero if the day is less than 10
if (dd < 10) {
  dd = "0" + dd;
}

// Add leading zero if the month is less than 10
if (mm < 10) {
  mm = "0" + mm;
}

// Format the date as mm-dd-yyyy and log it
today = mm + "-" + dd + "-" + yyyy;
console.log(today);

// Format the date as mm/dd/yyyy and log it
today = mm + "/" + dd + "/" + yyyy;
console.log(today);

// Format the date as dd-mm-yyyy and log it
today = dd + "-" + mm + "-" + yyyy;
console.log(today);

// Format the date as dd/mm/yyyy and log it
today = dd + "/" + mm + "/" + yyyy;
console.log(today);

//guess the number game (between 1 and 10)
var num = math.ceil(math.random() * 10);
console.log(num);
var guess = prompt("Guess the number between 1 and 10");
if (guess == num) {
  alert("Congratulations! You guessed the correct number.");
} else console.log("Sorry. The number was " + num + ".");

//check if the year 1st jan is a sunday or not

for (var year = 2014; year <= 2050; year++) {
  var d = new Data(year, 0, 1);
  if (d.getDay() === 0) {
    console.log("1st jan is sunday in year " + year);
  }
}

//rotate string from left to right

var str = "bishal";
var n = 2;
var left = str.substring(0, n);
var right = str.substring(n, str.length);
console.log(right + left);

//check if the year given is a leap year or not
var year = prompt("Enter the year");
function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(year));

//calculate the area of a triangle
var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(area);

//Write a JavaScript program to calculate the days left before Christmas.
var today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((cmas.getTime() - today.getTime()) / one_day) +
    " days left until Christmas!"
);

//program to calculate multiplication and division of two numbers
function multiply() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  if (num1 === "" || num2 === "") {
    document.getElementById("result").innerHTML = "Please enter both numbers.";
    return;
  }
  var result = num1 * num2;
  document.getElementById("result").innerHTML = result;
}

function divide() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  if (num1 === "" || num2 === "") {
    document.getElementById("result").innerHTML = "Please enter both numbers.";
    return;
  }
  if (num2 == 0) {
    document.getElementById("result").innerHTML = "Cannot divide by zero.";
    return;
  }
  var result = num1 / num2;
  document.getElementById("result").innerHTML = result;
}

// Declare a variable named var_name and assign it the string 'abcd'
var var_name = "abcd";

// Declare a variable named n and assign it the number 120
var n = 120;

// Assign the value of n to the property named 'abcd' of the 'this' object
this[var_name] = "BISHAL";

// Log the value of the property 'abcd' of the 'this' object to the console
console.log(this[var_name]);

//program to find the file extension of a filename

filename = "system.php";

// Log the result of extracting the file extension using split and pop to the console
console.log(filename.split(".").pop());

// program to check if two number are same then return triple their sum else return their sum
function check(x, y) {
  return x === y ? (x + y) * 3 : x + y;
}
console.log(check(10, 11));

//program to check if any of the two numbers is 50 then return true , if sum of two numbers is 50 then return true else return false
function checkfifty(a, b) {
  if (a === 50 || b === 50) {
    return true;
  } else if (a + b == 50) {
    return true;
  } else return false;
}
console.log(checkfifty(10, 20));
console.log(checkfifty(10, 50));
console.log(checkfifty(10, 40));

//JavaScript program to check whether a given integer is within 20 of 100 or 400
function checkhundred(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}
console.log(checkhundred(100));

//check two given integers and return true if one is positive and one is negative else return false
function positive_negative(x, y) {
  // Check if either x is negative and y is positive, or x is positive and y is negative
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    // If true, return true
    return true;
  } else {
    // If false, return false
    return false;
  }
}

// Log the result of calling the positive_negative function with the arguments 2 and 2 to the console
console.log(positive_negative(2, 2));

//Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.
// Define a function named string_check that takes a parameter str1
function string_check(str1) {
  // Check if str1 is null, undefined, or starts with the substring 'Py'
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === "Py") {
    // If true, return str1
    return str1;
  }
  // If false, prepend 'Py' to str1 and return the result
  return "Py" + str1;
}

// Log the result of calling the string_check function with the argument "Python" to the console
console.log(string_check("Python"));

// Log the result of calling the string_check function with the argument "thon" to the console
console.log(string_check("thon"));

// program to remove a character at the specified position in a given string and return the modified string.
function remove_character(str, char_pos) {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}
console.log(remove_character("Python", 3));

//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
function first_last(str) {
  if (str.length <= 1) {
    return str;
  }
  mid_char = str.substring(1, str.length - 1);
  return str.charAt(str.length - 1) + mid_char + str.charAt(0);
}
console.log(first_last("BISHAL"));

// 12/4/2024

//24.Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
function front_back(str) {
  return str.charAt(0) + str + str.charAt(0);
}
console.log(front_back("BISHAL"));

//25.program to check whether a given positive number is a multiple of 3 or 7
function multiplyof3or7(n) {
  if (n % 3 == 0 || n % 7 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(multiplyof3or7(21));

// program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
function front_back3char(str) {
  if (str.length >= 3) {
    return (
      str.substring(str.length - 3, str.length) +
      str +
      str.substring(str.length - 3, str.length)
    );
  } else return false;
}
console.log(front_back3char("bishal"));

//program to check whether a string starts with 'Java' if it does not otherwise.
function checkJava(str) {
  if (str.substring(0, 4) == "Java") {
    return true;
  } else return false;
}
console.log(checkJava("JavaScript"));
console.log(checkJava("TypeScript"));

//program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

function CheckRange(a, b) {
  if (a >= 50 && a <= 99 && b >= 50 && b <= 99) {
    return true;
  } else return false;
}
console.log(CheckRange(10, 55));
console.log(CheckRange(50, 99));
console.log(CheckRange(51, 90));

//program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

function CheckRange(a, b, c) {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)) {
    return true;
  } else return false;
}
console.log(CheckRange(10, 55, 70));
console.log(CheckRange(100, 505, 700));

//program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function CheckScript(str) {
  if (str.substring(4, 10) == "script") {
    return str.substring(0, 4) + str.substring(11, str.length);
  } else return str;
}
console.log(CheckScript("javascript"));
console.log(CheckScript("javaquery"));

//JavaScript program to find the largest of three given integers.
function largestofthree(a, b, c) {
  return Math.max(a, b, c);
}
console.log(largestofthree(10, 20, 30));

//program to find the closest value to 100 from two numerical values.

function Check100(a, b) {
  if (Math.abs(a - 100) < Math.abs(b - 100)) {
    return a;
  } else {
    return b;
  }
}
console.log(Check100(90, 89)); // 90

//program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
function numbers_ranges(x, y) {
  // Check if x and y fall within the first range (40 to 60) or the second range (70 to 100)
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    // Return true if the conditions are met
    return true;
  } else {
    // Return false if the conditions are not met
    return false;
  }
}
// Log the result of calling numbers_ranges with the arguments 44 and 56 to the console
console.log(numbers_ranges(44, 56));

// Log the result of calling numbers_ranges with the arguments 70 and 95 to the console
console.log(numbers_ranges(70, 95));

// Log the result of calling numbers_ranges with the arguments 50 and 89 to the console
console.log(numbers_ranges(50, 89));

function check(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(check(44, 56)); // true
console.log(check(70, 95)); // true

//34. program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.
function greater(x, y) {
  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    return Math.max(x, y);
  } else console.log("Numbers not in range");
}
console.log(greater(5, 55));
console.log(greater(45, 55));

//Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

function checkchar(str, char) {
  if (str.charAt(2) == char) {
    return true;
  } else return false;
}
console.log(checkchar("bishal", "s"));
console.log(checkchar("bishal", "i"));

//Write a JavaScript program that checks whether the last digit of three positive integers is the same.
function checklastdigit(x, y, z) {
  return x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10;
}
console.log(checklastdigit(10, 20, 30));

//Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

function UpLowCase(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return str.substring(0, 3).toLowerCase() + str.substring(3);
  }
}

console.log(UpLowCase("BisHAL")); // "bisal"
console.log(UpLowCase("Hi")); // "HI"

// Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:

// If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
// If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.
function grade(marks, final) {
  if (final && marks >= 90) {
    return true;
  } else if (marks >= 89 && marks <= 100) {
    return true;
  } else {
    return false;
  }
}
console.log(grade(90, true)); // true
console.log(grade(89, false)); // false

//program to check from two given integers whether one of them is 8 or their sum or difference is 8.
function check8(x, y) {
  if (x == 8 || y == 8 || x + y == 8 || Math.abs(x - y) == 8) {
    return true;
  } else return false;
}
console.log(check8(8, 8));
console.log(check8(8, 10));

// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.
function numbers3(a, b, c) {
  if (a == b && a == c) {
    return 30;
  } else if (a == b || b == c || a == c) {
    return 40;
  } else return 20;
}
console.log(numbers3(5, 5, 5));

// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function number_order(a, b, c) {
  if (c > b && b > a) {
    return "strick mode";
  } else return "soft mode";
}

console.log(number_order(1, 2, 3));
console.log(number_order(8, 7, 11));

// program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
function rightdigit(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a % 10 == b % 10 && b % 10 == c % 10) {
      return a % 10;
    } else if (a % 10 == b % 10) {
      return a % 10;
    } else if (b % 10 == c % 10) {
      return b % 10;
    } else if (a % 10 == c % 10) {
      return c % 10;
    }
  }
  return "None rightmost digt matching number";
}
console.log(rightdigit(2, 12, 22));
console.log(rightdigit(202, 2120, 20));
console.log(rightdigit(2, 12, 22));

//program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.

function lessby20_others(x, y, z) {
  return (
    (x >= 20 && (x < y || x < z)) ||
    (y >= 20 && (y < x || y < z)) ||
    (z >= 20 && (z < y || z < x))
  );
}

console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));

// program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.
function fifteen(x, y) {
  return x == 15 || y == 15 || x + y == 15 || x - y == 15;
}
console.log(fifteen(7, 8));

//program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

function multiple7or11(x, y) {
  if ((x % 7 == 0 && y % 11 != 0) || (y % 7 == 0 && x % 11 != 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(multiple7or11(7, 14)); // true
console.log(multiple7or11(14, 22)); // false
console.log(multiple7or11(21, 22)); // true
console.log(multiple7or11(14, 77)); // false

//JavaScript program to check whether a given number exists in the range 40..10000.
function check40_10000(n) {
  return n >= 40 && n <= 10000;
}
console.log(check40_10000(40)); // true
console.log(check40_10000(10)); // false

//program to reverse a given string.

// 1st approach
function reverse(str) {
  let reversed = ""; // Initialize an empty string to store the reversed string
  for (i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i); // Append the character at index i to the reversed string
  }
  return reversed;
}
console.log(reverse("BISHAL")); // "LAHSIB"
console.log(reverse("JavaScript")); // "tpircSavaJ"

// 2nd approach
function reverse(str) {
  return str.split("").reverse();
}
console.log(reverse("BISHAL")); // "LAHSIB"

// program to replace every character in a given string with the character following it in the alphabet
function transform(str) {
  var newString = "";
  for (var i = 0; i < str.length; i++) {
    if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
      newString += String.fromCharCode(str.charCodeAt(i) + 1);
    }
    if (64 < str.charCodeAt(i) && str.charCodeAt(i) < 91) {
      newString += String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return newString;
}
console.log(transform("BISHAL")); // "CJTIAM"
console.log(transform("JavaScript")); // "KbqfUbTqbs"

//program to capitalize the first letter of each word in a given string.
function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalize("bishal rauniyar")); // "Bishal Rauniyar"
console.log(capitalize("javascript programming")); // "Javascript Programming"

//2nd approach

function cap(str) {
  var words = str.split(" ");
  var newString = words
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  return newString;
}

console.log(cap("bishal rauniyar"));
// "Bishal Rauniyar"
console.log(cap("javascript programming"));

//application that transforms a provided numerical value into hours and minutes.

function calculate(a) {
  return Math.ceil(a / 60) - 1 + " Hours " + (a % 60) + " Min";
}
console.log(calculate(120));
console.log(calculate(245));

//JavaScript program to convert letters of a given string alphabetically. split sort join
function alphabet_sort(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_sort("BISHAL")); // "ABHILS"

function ab_Check(str) {
  // Use regular expressions to check if the pattern 'a...b' or 'b...a' exists in the given string
  // The test() method returns true if the pattern is found, otherwise, it returns false
  return /a...b/.test(str) || /b...a/.test(str);
}

// Log the result of calling ab_Check with the given strings to the console
console.log(ab_Check("ChainsBreak"));

//this code will not work if the characters are small or capital letter

//making it work for every possible combination of a and b
function ab_Check(str) {
  // Use regular expressions to check if the pattern 'a...b' or 'b...a' exists in the given string
  // The test() method returns true if the pattern is found, otherwise, it returns false
  return (
    /a...b/.test(str) ||
    /b...a/.test(str) ||
    /A...B/.test(str) ||
    /B...A/.test(str) ||
    /a...B/.test(str) ||
    /b...A/.test(str) ||
    /A...b/.test(str) ||
    /B...a/.test(str)
  );
}

// Log the result of calling ab_Check with the given strings to the console
console.log(ab_Check("hainsBreak"));
console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("ChainsBreak"));

//program to count the number of vowels in a given string.
function countVowels(str) {
  var count = 0;
  var vowels = "aeiouAEIOU";
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("BISHAL")); // 2
console.log(countVowels("JavaScript")); // 3

//program to check whether a given string contains an equal number of p's and t's
function equal_pt(str) {
  var countp = 0;
  var countt = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      countp++;
    }
    if (str[i] === "t") {
      countt++;
    }
  }
  return countp == countt;
}
console.log(equal_pt("javascript")); // true

//program to divide two positive numbers and return the result as string with properly formatted commas.
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero.";
  }
  return (a / b).toLocaleString();
}
console.log(divide(1000000, 10)); // "100,000"

//program to create one string of specified copies (positive numbers) of a given string.
function string_copies(str, n) {
  // Check if n is less than 0
  if (n < 0)
    // Return false if n is negative
    return false;
  // Use the repeat method to replicate the string 'n' times
  else return str.repeat(n);
}
// program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.
function string_copies(str) {
  if (str.length < 3) {
    return false;
  } else {
    return str.substring(str.length - 3).repeat(4);
  }
}
console.log(string_copies("JavaScript")); // "iptiptiptipt"

//program to extract the first half of a even string.
function first_half(str) {
  if (str.length % 2 == 0) {
    return str.substring(0, str.length / 2);
  }
  return str;
}

// remove first and last character of the string
function first_last(str) {
  return str.substring(1, str.length - 1);
}
console.log(first_last("Bishal")); // "isha"

//program to concatenate two strings except for their first character
function concat(str1, str2) {
  return str1.substring(1, str1.length) + str2.substring(1, str2.length);
}
console.log(concat("bishal", "rauniyar"));
console.log(concat("javascript", "programming"));

// program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.
function move(str) {
  if (str.length >= 3) {
    return (
      str.substring(str.length - 3, str.length) +
      str.substring(0, str.length - 3)
    );
  }
}
console.log(move("rauniyar"));

// program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.
function middle_three(str) {
  if (str.length % 2 !== 0) {
    return str.substring(str.length / 2 - 1, str.length / 2 + 2);
  }
}

//program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.
function concat(str1, str2) {
  if (str1.length > str2.length) {
    return str1.substring(0, str2.length) + str2;
  } else if (str2.length > str1.length) {
    return str1 + str2.substring(0, str1.length);
  } else {
    return str1 + str2;
  }
}
console.log(concat("Bishal", "Rauniyar"));
console.log(concat("javascript", "programming"));
console.log(concat("Gobar", "Dhann"));

// program to test whether a string ends with "Script". The string length must be greater than or equal to 6.
function checkscript(str) {
  if (str.length >= 6) {
    if (str.substring(str.length - 6, str.length) === "Script") {
      return true;
    }
  }
  return false;
}
console.log(checkscript("JavaScript"));
console.log(checkscript("TypeScript"));
console.log(checkscript("PythonScript"));
console.log(checkscript("Script"));

//program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function check(str) {
  if (str.length >= 3) {
    if (str.substring(0, 3) === "New" || str.substring(0, 3) === "Los") {
      return str;
    }
  }
  return "";
}
console.log(check("NewYork"));
console.log(check("LosAngels"));
console.log(check("Nepal"));

//  program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.
function removeP(str) {
  if (str.substring(0, 1) === "P" || str.substring(str.length - 1) === "P") {
    return str.substring(1, str.length - 1);
  }
  return str;
}

console.log(removeP("Panda")); // "and"
console.log(removeP("Pineapple")); // "ineappl"
console.log(removeP("Apple")); // "Apple"

// program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.
function createnew(str, n) {
  var newstring;
  if (str.length >= n) {
    newstring = str.substring(0, n) + str.substring(str.length - n, str.length);
  }
  return newstring;
}
console.log(createnew("bishal", 2)); // "bial"
console.log(createnew("javascript", 3)); // "javipt"

// program to compute the sum of three elements of a given array of integers of length 3.
function sum_three(nums) {
  // Return the sum of the three numbers using array indexing
  return nums[0] + nums[1] + nums[2];
}
// Call the function with different arrays and log the results to the console
console.log(sum_three([10, 32, 20]));
console.log(sum_three([5, 7, 9]));
console.log(sum_three([0, 8, -11]));

// program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.
function checkone(array) {
  if (array.length >= 1) {
    return array[0] === 1 || array[array.length - 1] === 1;
  }
  return false;
}

console.log(checkone([5, 6, 1])); // true
console.log(checkone([1, 6, 5])); // true
console.log(checkone([5, 6, 5])); // false
console.log(checkone([1])); // true

//  program to check whether the first and last elements are the same in a given array of integers of length 3.
function samefirstlast(array) {
  if (array[0] === array[array.length - 1]) {
    return true;
  } else return false;
}
console.log(samefirstlast([1, 2, 0])); // false
console.log(samefirstlast([1, 2, 1])); // true
console.log(samefirstlast([10, 20, 30])); // false
console.log(samefirstlast([20, 20, 20])); // true([10, 20, 30, 10]));
console.log(samefirstlast([20, 20, 20])); // true([20, 20, 20]));

//program to reverse the elements of a given array of integers of length 3.
function reversearray(array) {
  return [array[2], array[1], array[0]];
}
console.log(reversearray([5, 6, 7]));
console.log(reversearray([10, 20, 30]));
console.log(reversearray([1, 2, 3]));

//program to reverse the elements of a given array of integers of length 3.
// 1st approach
function reversearray(array) {
  return [array[2], array[1], array[0]];
}
console.log(reversearray([5, 6, 7]));

// 2nd approach
function reversearray(array) {
  return array.reverse();
}
console.log(reversearray([5, 6, 7]));

// 3rd approach usng map
function reversearray(array) {
  return array.map((elements, i, arr) => arr[arr.length - 1 - i]);
}
console.log(reversearray([5, 6, 7]));

// program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.
//1st approach
function replaceupdate(array) {
  var newArray = [];
  if (array[0] > array[array.length - 1]) {
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[0];
    }
  } else {
    if (array[0] > array[array.length - 1]) {
      newArray[i] = array[array.length - 1] = newarray[i];
    }
  }
  return newArray;
}
console.log(replaceupdate([5, 2, 3]));

//2nd approach
function all_max(nums) {
  // Determine the maximum value between the first and third elements using a ternary operator
  var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

  // Set all elements in the array to the determined maximum value
  nums[0] = max_val;
  nums[1] = max_val;
  nums[2] = max_val;

  // Return the modified array
  return nums;
}

// Call the function with sample arguments and log the results to the console
console.log(all_max([20, 30, 40])); // Output: [40, 40, 40]
console.log(all_max([-7, -9, 0])); // Output: [0, 0, 0]
console.log(all_max([12, 10, 3])); // Output: [12, 12, 12]

// 3rd approach
function replaceupdate(array) {
  var max = Math.max(array[0], array[array.length - 1]);
  for (var i = 0; i < array.length; i++) {
    array[i] = max;
  }
  return array;
}

// program to create an array taking the middle elements of the two arrays of integer and each length 3.
function midtwo(array1, array2) {
  var newarray = [];
  newarray.push(array1[1], array2[1]);
  return newarray;
}
console.log(midtwo([1, 2, 3], [4, 5, 6]));

//  program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.
function firstlastarray(array) {
  var newarray = [];
  if (array.length >= 1) {
    newarray.push(array[0], array[array.length - 1]);
  }
  return newarray;
}
console.log(firstlastarray([1, 2, 3]));

//program to test whether an array of integers of length 2 contains 1 or 3.
function oneorthree(array) {
  if (array.length === 2) {
    if (array[0] === 1 || array[0] === 3 || array[1] === 1 || array[1] === 3) {
      return true;
    }
    false;
  }
  return false;
}
console.log(oneorthree([2, 2])); // false
console.log(oneorthree([1, 2])); // true
console.log(oneorthree([3, 2])); // true

//program to test whether an array of integers of length 2 contains 1 or 3.
// 1st approach
function oneorthree(array) {
  if (array.length === 2) {
    if (array[0] === 1 || array[0] === 3 || array[1] === 1 || array[1] === 3) {
      return true;
    }
    false;
  }
  return false;
}
console.log(oneorthree([2, 2]));

// 2nd approach
// Function checks if the array 'nums' contains either 1 or 3
function contains13(nums) {
  // Check if 1 is present at any index or 3 is present at any index
  if (nums.indexOf(1) !== -1 || nums.indexOf(3) !== -1) {
    // Return true if either 1 or 3 is found
    return true;
  } else {
    // Return false if neither 1 nor 3 is found
    return false;
  }
}

// Example usage of the contains13 function
console.log(contains13([1, 5])); // Should return true, as 1 is present
console.log(contains13([2, 3])); // Should return true, as 3 is present
console.log(contains13([7, 5])); // Should return false, as neither 1 nor 3 is present

//program to test whether an array of integers of length 2 does not contain 1 or 3.
// 1st approach
function donotcontains13(nums) {
  if (nums.indexOf(1) !== -1 || nums.indexOf(3) !== -1) {
    return false;
  } else {
    return true;
  }
}

// Example usage of the contains13 function
console.log(donotcontains13([1, 5])); // Should return true, as 1 is present
console.log(donotcontains13([2, 3])); // Should return true, as 3 is present
console.log(donotcontains13([7, 5])); // Should return false, as neither 1 nor 3 is present

// 2nd approach

function donotcontains13(array) {
  if (array.length === 2) {
    if (array[0] === 1 || array[0] === 3 || array[1] === 1 || array[1] === 3) {
      return false;
    }
    true;
  }
  return true;
}
console.log(donotcontains13([2, 2]));

//JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.
function contains3040(nums) {
  if (nums.length <= 2) {
    if (
      (nums[0] === 30 && nums[1] === 30) ||
      (nums[0] === 40 && nums[1] === 40)
    ) {
      return true;
    }
  }
  return false;
}

console.log(contains3040([30, 40])); // false
console.log(contains3040([30, 30])); // true
console.log(contains3040([40, 40])); // true
console.log(contains3040([30])); // false

//JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
function swapfirstlast(array) {
  if (array.length > 1) {
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  }
  return array;
}

console.log(swapfirstlast([1, 2, 3, 4])); // [4, 2, 3, 1]
console.log(swapfirstlast([7, 8, 9])); // [9, 8, 7]
console.log(swapfirstlast([5])); // [5]

//add two elements of a number of lenth 2
function add(number) {
  var sum = 0;
  var str = number.toString();
  if (str.length == 2) {
    sum = parseInt(str.charAt(0)) + parseInt(str.charAt(1));
  }
  return sum;
}

console.log(add(12)); // 3
console.log(add(34)); // 7
console.log(add(56)); // 11

// Function to add the two digits of a number
function add_two_digits(n) {
  // Return the sum of the last digit and the result of dividing the number by 10 and rounding down
  return (n % 10) + Math.floor(n / 10);
}

// Example usage
console.log(add_two_digits(25)); // Output: 7 (2 + 5)
console.log(add_two_digits(50)); // Output: 5 (5 + 0)

//JavaScript program to add two positive integers without carrying.
// JavaScript program to add two positive integers without carrying.
function addWithoutCarrying(a, b) {
  let result = 0;
  let place = 1;

  while (a > 0 || b > 0) {
    let digitA = a % 10;
    let digitB = b % 10;
    let sum = (digitA + digitB) % 10;

    result += sum * place;
    place *= 10;
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }

  return result;
}

console.log(addWithoutCarrying(123, 456)); // 579
console.log(addWithoutCarrying(555, 555)); // 000
console.log(addWithoutCarrying(123, 789)); // 802

// Function to find the longest string(s) in an array
function longest_string(str_ara) {
  var max = str_ara[0].length;
  // Initialize max length with the length of the first string
  str_ara.map((v) => (max = Math.max(max, v.length)));
  // Update max with the maximum length in the array using the map function
  result = str_ara.filter((v) => v.length == max);
  // Filter out strings that have the maximum length
  return result;
  // Return the array of longest strings
}

// Example usage
console.log(longest_string(["a", "aa", "aaa", "aaaaa", "aaaa"]));

// JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
// 1st approach
function nextalpha(str) {
  var result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      result += String.fromCharCode(((charCode - 65 + 1) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      result += String.fromCharCode(((charCode - 97 + 1) % 26) + 97);
    } else {
      // Non-alphabetic characters remain the same
      result += str.charAt(i);
    }
  }
  return result;
}

console.log(nextalpha("bishal")); // "cjtibm"
console.log(nextalpha("BISHAL")); // "CJTIBM"

// 2nd approach
function nextalpha(str) {
  return str
    .split("")
    .map((char) => {
      let charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        return String.fromCharCode(((charCode - 65 + 1) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        return String.fromCharCode(((charCode - 97 + 1) % 26) + 97);
      } else {
        // Non-alphabetic characters remain the same
        return char;
      }
    })
    .join("");
}
console.log(nextalpha("bishal")); // "cjtibm"
console.log(nextalpha("BISHAL")); // "CJTIBM"

// program to divide a given array of positive integers into two parts. First element belongs to the first part,
//  second element belongs to the second part, and third element belongs to the first part and so on.
//  Now compute the sum of two parts and store it in an array of size two.
function dividearray(array) {
  var result = [0, 0];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      result[0] += array[i];
    } else {
      result[1] += array[i];
    }
  }
  return result;
}

// Write a JavaScript program to find the types of a given angle.

// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.
function findangle(angle) {
  var angle = prompt("enter the degree of the angle ");
  angle = parseInt(angle);
  if (angle >= 0 && angle < 90) {
    console.log("Acute Angle");
  } else if (angle === 90) {
    console.log("Right Angle");
  } else if (angle >= 90 && angle <= 180) {
    console.log("Obtuse Angle");
  } else if (angle === 180) {
    console.log("Straight Angle");
  } else console.log("invalid Input");
}
findangle();

//JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
function similar_arrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let diff = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      diff.push([arr1[i], arr2[i]]);
    }
  }

  if (diff.length === 0) return true; // Arrays are already identical
  if (diff.length !== 2) return false; // More than one swap needed

  // Check if swapping the two differing pairs makes the arrays identical
  return diff[0][0] === diff[1][1] && diff[0][1] === diff[1][0];
}

console.log(similar_arrays([1, 2, 3], [1, 3, 2])); // true
console.log(similar_arrays([1, 2, 3], [1, 3, 4])); // false
console.log(similar_arrays([10, 20, 30, 40], [10, 30, 20, 40])); // true

//JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.
function similar(x, y, divisor) {
  return (
    (x % divisor === 0 && y % divisor === 0) ||
    (x % divisor !== 0 && y % divisor !== 0)
  );
}
console.log(similar(10, 25, 5)); // true
console.log(similar(10, 20, 10)); // false
console.log(similar(10, 20, 4)); // false

// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
function replace(x, y, z) {
  return x + y === z || x - y === z || x * y === z || x / y === z;
}
console.log(replace(10, 30, 300)); // true
console.log(replace(10, 30, 40)); // false

// Write a JavaScript program to find the kth greatest element in a given array of integers.

function findKthGreatest(array, k) {
  // Sort the array in descending order
  array.sort((a, b) => b - a);

  // Return the k-th greatest element
  return array[k - 1];
}

// Example usage
console.log(findKthGreatest([1, 2, 3, 4, 5], 3)); // 3
console.log(findKthGreatest([10, 20, 30, 40, 50], 2)); // 40
console.log(findKthGreatest([5, 4, 3, 2, 1], 1)); // 5

//a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.
//1st approach
function maxConsecutiveSum(arr, k) {
  if (arr.length < k) {
    return null; // If the array length is less than k, return null
  }

  let maxSum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;

  // Slide the window of k elements through the array
  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
console.log(maxConsecutiveSum([1, 2, 3, 14, 5], 2)); // 19
console.log(maxConsecutiveSum([2, 3, 5, 1, 6], 3)); // 12
console.log(maxConsecutiveSum([9, 3, 5, 1, 7], 2)); // 12

//2nd approach
function maxConsecutiveSum(arr, k) {
  if (arr.length < k) {
    return null; // If the array length is less than k, return null
  }

  let maxSum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;

  // Slide the window of k elements through the array
  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
console.log(maxConsecutiveSum([1, 2, 3, 14, 5], 2)); // 19
console.log(maxConsecutiveSum([2, 3, 5, 1, 6], 3)); // 12
console.log(maxConsecutiveSum([9, 3, 5, 1, 7], 2)); // 12

//JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
function maxDifference(arr) {
  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    maxDiff = Math.max(maxDiff, Math.abs(arr[i] - arr[i - 1]));
  }

  return maxDiff;
}
console.log(maxDifference([1, 2, 3, 8, 9])); // 5
console.log(maxDifference([1, 2, 3, 18, 9])); // 15
console.log(maxDifference([13, 2, 3, 8, 9])); // 11

//JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
function maxDifference(arr) {
  let maxDiff = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      maxDiff = Math.max(maxDiff, Math.abs(arr[i] - arr[j]));
    }
  }

  return maxDiff;
}
console.log(maxDifference([1, 2, 3, 8, 9])); // 8
console.log(maxDifference([1, 2, 3, 18, 9])); // 17
console.log(maxDifference([13, 2, 3, 8, 9])); // 11

// JavaScript program to find the most frequent element in an array
function mostFrequent(arr) {
  let maxcount = 0;
  let element_having_max_freq;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }

    if (count > maxcount) {
      maxcount = count;
      element_having_max_freq = arr[i];
    }
  }

  return element_having_max_freq;
}
console.log(mostFrequent([40, 50, 30, 40, 50, 30, 30]));

//JavaScript program to replace all numbers with a specified number in an array of integers.
function replaceNumbers(arr, num) {
  return arr.map((el) => num);
}
console.log(replaceNumbers([1, 2, 3, 4, 5], 10)); // [10, 10, 10, 10, 10]
console.log(replaceNumbers([10, 20, 30, 40, 50], 5)); // [5, 5, 5, 5, 5]

//JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.
function sumOfDifferences(arr) {
  let sum = 0;

  for (let i = 1; i < arr.length; i++) {
    sum += Math.abs(arr[i] - arr[i - 1]);
  }

  return sum;
}
console.log(sumOfDifferences([1, 2, 3, 4, 5])); // 4
console.log(sumOfDifferences([10, 20, 30, 40, 50])); // 40

//JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.
function shortestPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str.slice(0, str.length - i) === str.slice(i).split("").reverse().join("")
    ) {
      return str.slice(0, i).split("").reverse().join("") + str;
    }
  }
}
console.log(shortestPalindrome("abcde")); // "edcbabcde"
console.log(shortestPalindrome("bishal")); // "lahsibishal".

//JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.
// Fox example "Write" will be write and "PHp" will be "PHP"
function changeCase(str) {
  let lowerCaseCount = 0;
  let upperCaseCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      lowerCaseCount++;
    } else {
      upperCaseCount++;
    }
  }

  return lowerCaseCount < upperCaseCount
    ? str.toLowerCase()
    : str.toUpperCase();
}
console.log(changeCase("Write")); // "write"
console.log(changeCase("PHp")); // "PHP"
console.log(changeCase("bishal")); // "BIHSAL"

//JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.
function rearrangeChars(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(rearrangeChars("abc", "cba")); // true
console.log(rearrangeChars("abc", "cbd")); // false
console.log(rearrangeChars("bishal", "lahsib")); // true

//JavaScript program to check if there is at least one element in two given sorted arrays of integers.\
function checkElements(arr1, arr2) {
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      return true;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }

    return false;
  }
}
console.log(checkElements([1, 2, 3, 4, 5], [5, 6, 7, 8, 9])); // true

//JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
function checkLatinLetters(str) {
  for (let i = 0; i < str.length; i++) {
    if (!/[a-zA-Z]/.test(str[i])) {
      return false;
    }

    if (/[a-z]/.test(str[i]) && /[a-z]/.test(str[i + 1])) {
      return false;
    }

    if (/[A-Z]/.test(str[i]) && /[A-Z]/.test(str[i + 1])) {
      return false;
    }
  }

  return true;
}
console.log(checkLatinLetters("abcDEF")); // true

// //JavaScript program to find the number of inversions of a given array of integers.
// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
function countInversions(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }

  return count;
}

// a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.
function digit_delete(num) {
  var result = 0,
    num_digits = [];
  while (num) {
    num_digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (var index_num = 0; index_num < num_digits.length; index_num++) {
    var n = 0;
    for (var i = num_digits.length - 1; i >= 0; i--) {
      if (i !== index_num) {
        n = n * 10 + num_digits[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}

console.log(digit_delete(100));
console.log(digit_delete(10));
console.log(digit_delete(1245));

//program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.
function closest(arr, num) {
  let closest = Infinity;
  let pair = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diff = Math.abs(arr[i] - arr[j]);

      if (diff < closest && diff <= num) {
        closest = diff;
        pair = [arr[i], arr[j]];
      }
    }
  }

  return pair;
}
console.log(closest([1, 2, 3, 4, 5], 2)); // [1, 2]
console.log(closest([1, 2, 3, 4, 5], 1)); // [4, 5]

//a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.
function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(456)); // 15
console.log(sumOfDigits(789)); // 24

// program to divide an integer by another integer as long as the result is an integer and return the result.
function divide(num, divisor) {
  while (num % divisor === 0) {
    num = num / divisor;
  }

  return num;
}
console.log(divide(81, 3)); // 1
console.log(divide(100, 2)); // 25
console.log(divide(100, 3)); // 100

//JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one.
// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
function sortedPairs(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
        count++;
      }
    }
  }

  return count;
}
console.log(sortedPairs([1, 3, 2])); // 2
console.log(sortedPairs([2, 4, 6])); // 2
console.log(sortedPairs([2, 4, 16])); // 3

//a JavaScript program to create the dot products of two given 3D vectors.
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

function dotProduct(vector1, vector2) {
  let sum = 0;

  for (let i = 0; i < vector1.length; i++) {
    sum += vector1[i] * vector2[i];
  }

  return sum;
}
console.log(dotProduct([1, 2, 3], [1, 2, 3])); // 14
console.log(dotProduct([2, 4, 6], [1, 2, 3])); // 28

//JavaScript program to sort an array of all prime numbers between 1 and a given integer.
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
console.log(isPrime(13)); // true

//a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.
function countEven(arr, num) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      break;
    }

    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}
console.log(countEven([1, 2, 3, 4, 5], 4)); // 1
console.log(countEven([2, 4, 6, 8, 10], 8)); // 2

// a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.
function findThirdNumber(x, y, z) {
  if (x === y) {
    return z;
  } else if (x === z) {
    return y;
  } else {
    return x;
  }
}
console.log(findThirdNumber(1, 2, 2)); // 1
console.log(findThirdNumber(1, 1, 2)); // 2
console.log(findThirdNumber(1, 2, 3)); // 1

//a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.
function trailingZeros(num) {
  let count = 0;

  for (let i = 5; num / i >= 1; i *= 5) {
    count += Math.floor(num / i);
  }

  return count;
}
console.log(trailingZeros(5)); // 1
console.log(trailingZeros(10)); // 2
console.log(trailingZeros(15)); // 3

// a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.
function sumSeries(num) {
  let sum = 0;

  while (num > 0) {
    sum += num;
    num = Math.floor(num / 2);
  }

  return sum;
}
console.log(sumSeries(8)); // 15  8+4+2+1

//a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)
function isCorrectSentence(str) {
  return /^[A-Z].*\.$/.test(str);
}
console.log(isCorrectSentence("This is a correct sentence.")); // true
console.log(isCorrectSentence("this is not a correct sentence")); // false

//a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).
// Example:
// [1, 0, 0],
// [0, 2, 0],
// [0, 0, 3] ]) = true
// [1, 0, 0],
// [0, 2, 3],
// [0, 0, 3] ]) = false
function isDiagonalMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i !== j && matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  isDiagonalMatrix([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3],
  ])
); // true

console.log(
  isDiagonalMatrix([
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3],
  ])
); // false

//Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.
// For a string "2*0", the output should be : ["210", "240", "270"]
function replaceHash(str) {
  let result = [];

  for (let i = 0; i < 10; i++) {
    let num = str.replace("#", i);
    if (parseInt(num) % 3 === 0) {
      result.push(num);
    }
  }

  return result;
}
console.log(replaceHash("2#0")); // ["210", "240", "270"]

// JavaScript program to check whether a given matrix is an identity matrix.
function isIdentityMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j && matrix[i][j] !== 1) {
        return false;
      }
      if (i !== j && matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  isIdentityMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
); // true
console.log(
  isIdentityMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 1, 1],
  ])
); // false

//JavaScript program to check whether a given number is in a given range.
function inRange(num, range) {
  return num >= range[0] && num <= range[1];
}
console.log(inRange(5, [1, 10])); // true
console.log(inRange(15, [1, 10])); // false

//JavaScript program to check if a given integer has an increasing digit sequence.
function increasingDigits(num) {
  let str = num.toString();

  for (let i = 1; i < str.length; i++) {
    if (str[i] <= str[i - 1]) {
      return false;
    }
  }

  return true;
}
console.log(increasingDigits(123)); // true

//JavaScript program to check if a point lies strictly inside the circle.
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)
// Output: True or False
function pointInsideCircle(x, y, a, b, r) {
  return (a - x) ** 2 + (b - y) ** 2 < r ** 2;
}
console.log(pointInsideCircle(0, 0, 1, 1, 1)); // false
console.log(pointInsideCircle(0, 0, 1, 0, 1)); // true

//JavaScript program to check whether a given matrix is lower triangular or not.
// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.
function isLowerTriangular(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  isLowerTriangular([
    [1, 0, 0],
    [2, 3, 0],
    [4, 5, 6],
  ])
); // true

//JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.
function increasingOrDecreasing(arr) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      increasing = false;
    }

    if (arr[i] >= arr[i - 1]) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
}
console.log(increasingOrDecreasing([1, 2, 3, 4, 5])); // true
console.log(increasingOrDecreasing([5, 4, 3, 2, 1])); // true
console.log(increasingOrDecreasing([1, 2, 3, 2, 1])); // false

// JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.
function isPermutation(arr, n) {
  if (arr.length !== n) {
    return false;
  }

  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      return false;
    }
  }

  return true;
}
console.log(isPermutation([1, 2, 3, 4, 5], 5)); // true
console.log(isPermutation([1, 2, 3, 4, 5], 6)); // false

// a JavaScript program to create the NOR value of two given booleans.
// Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
// Sample Example:
// For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.
function logical_Nor(p, q) {
  return !(p || q);
}
console.log(logical_Nor(true, false)); // false
console.log(logical_Nor(false, false)); // true

//Write a JavaScript program to find the longest string in a given array.
function longest_string(str_ara) {
  var max = str_ara[0].length;
  // Initialize max length with the length of the first string
  str_ara.map((v) => (max = Math.max(max, v.length)));
  // Update max with the maximum length in the array using the map function
  result = str_ara.filter((v) => v.length == max);
  // Filter out strings that have the maximum length
  return result;
  // Return the array of longest strings
}
console.log(longest_string(["a", "aa", "aaa", "aaaaa", "aaaa"]));
// ["aaaaa"]

//a JavaScript program to get the largest even number from an array of integers.
function largest_even(arr) {
  let even = arr.filter((num) => num % 2 === 0);
  return Math.max(...even);
}
console.log(largest_even([1, 2, 3, 4, 5])); // 4

//JavaScript program to reverse the order of bits in a integer.
//14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87
function reverseBits(num) {
  return parseInt(num.toString(2).split("").reverse().join(""), 2);
}
console.log(reverseBits(14)); // 112
console.log(reverseBits(56)); // 28
console.log(reverseBits(234)); // 87

//program to find the smallest round number not less than a given value.
// Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.
function smallestRoundNumber(num) {
  while (num % 10 !== 0) {
    num++;
  }
  return num;
}
console.log(smallestRoundNumber(592)); // 600
console.log(smallestRoundNumber(590)); // 600
console.log(smallestRoundNumber(640)); // 640

//a JavaScript program to find the smallest prime number strictly greater than a given number.
function nextPrime(num) {
  num++;
  while (!isPrime(num)) {
    num++;
  }
  return num;
}

console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(10)); // 11

//JavaScript program to find the number of even digits in a given integer.
function countEvenDigits(num) {
  return num
    .toString()
    .split("")
    .filter((digit) => digit % 2 === 0).length;
}
console.log(countEvenDigits(12345)); // 2
console.log(countEvenDigits(24680)); // 5
console.log(countEvenDigits(13579)); // 0

//a JavaScript program to create an array of prefix sums of the given array.
// In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
// y0 = x0
// y1 = x0 + x1
// y2 = x0 + x1+ x2
// y3 = x0 + x1 + x2 + x3
function prefixSums(arr) {
  let prefixSum = 0;
  return arr.map((num) => (prefixSum += num));
}
console.log(prefixSums([1, 2, 3, 4, 5])); // [1, 3, 6, 10, 15]

// a JavaScript program to find all distinct prime factors of a given integer.
function primeFactors(n) {
  let factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return [...new Set(factors)];
}
console.log(primeFactors(100)); // [2, 5]
console.log(primeFactors(101)); // [101]

//a JavaScript program to check whether a given fraction is proper or not.
// Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.
function properFraction(numerator, denominator) {
  return numerator < denominator;
}
console.log(properFraction(1, 2)); // true
console.log(properFraction(2, 2)); // false

// a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
function changeLetters(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toLowerCase()
        ? String.fromCharCode(219 - char.charCodeAt(0))
        : char
    )
    .join("");
}

console.log(changeLetters("abc")); // "zyx"
console.log(changeLetters("xyz")); // "cba"

//JavaScript program to remove all characters from a given string that appear more than once.
function removeDuplicates(str) {
  return str
    .split("")
    .filter((char, index, arr) => arr.indexOf(char) === arr.lastIndexOf(char))
    .join("");
}
console.log(removeDuplicates("abc")); // "abc"
console.log(removeDuplicates("abca")); // "bc"

//JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character.
function replaceFirstDigit(str) {
  return str.replace(/[0-9]/, "$");
}
console.log(replaceFirstDigit("abc123")); // "abc$23"
console.log(replaceFirstDigit("abc")); // "abc"

// JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15.
function testNum(n) {
  return n > 15 ? n : 15;
}
console.log(testNum(16)); // 16
console.log(testNum(10)); // 15

//a JavaScript program to reverse the bits of a given 16-bit unsigned short integer.
function reverseBits(n) {
  return parseInt(
    n.toString(2).padStart(16, "0").split("").reverse().join(""),
    2
  );
}
console.log(reverseBits(1)); // 32768
console.log(reverseBits(2)); // 16384

//a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.  A round number is an integer that ends with one or more zeros.
function rightmostRoundNumber(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 10 === 0) {
      return i + 1;
    }
  }
  return 0;
}
console.log(rightmostRoundNumber([1, 2, 30, 40, 50])); // 4
console.log(rightmostRoundNumber([1, 2, 3, 4, 5])); // 0

//JavaScript program to check whether all the digits in a given number are the same or not.
function sameDigits(num) {
  return new Set(num.toString()).size === 1;
}
console.log(sameDigits(111)); // true
console.log(sameDigits(123)); // false

//JavaScript program to find the number of elements in both arrays.
function noelements(array1, array2) {
  let arr1Length = array1.length;
  let arr2Length = array2.length;
  return [arr1Length, arr2Length];
}
console.log(noelements([1, 2, 3], [4, 5, 6]));

// a JavaScript program to simplify a given absolute path for a file in Unix-style.
function simplifyPath(path) {
  let stack = [];

  for (let dir of path.split("/")) {
    if (dir === "..") {
      stack.pop();
    } else if (dir !== "." && dir !== "") {
      stack.push(dir);
    }
  }

  return "/" + stack.join("/");
}
console.log(simplifyPath("/home/")); // "/home"
console.log(simplifyPath("/../")); // "/"

//JavaScript program to sort the strings of a given array of strings in order of increasing length.
// Note: Do not change the order if the lengths of two string are same.
function sortStrings(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
console.log(sortStrings(["abc", "ab", "abcd"])); // ["ab", "abc", "abcd"]
console.log(sortStrings(["abc", "ab", "a"])); // ["a", "ab", "abc"]
console.log(sortStrings(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"])); // ["", "a", "b", "aa", "bb", "acd", "xyz", "zzz"]

//JavaScript program to break an URL address and put its parts into an array.
// Note: url structure : ://.org[/] and there may be no part in the address.
function breakURL(url) {
  return url.match(/(\w+):\/\/(\w+)\.(\w+)(\/\w+)?/).slice(1);
}
console.log(
  breakURL(
    "https://www.w3resource.com/javascript-exercises/javascript-array-exercise-1.php"
  )
); // ["https", "www", "w3resource", "/javascript-exercises/javascript-array-exercise-1.php"]

//second approach

function break_address(url_add) {
  var data = url_add.split("://");
  var protocol = data[0];
  data = data[1].split(".com");
  var domain = data[0];
  data = data[1].split("/");

  if (data[1]) {
    return [protocol, domain, data[1]];
  }

  return [protocol, domain];
}

var url_add = "https://www.w3resource.com/javascript-exercises/";
console.log("Original address: " + url_add);
console.log(break_address(url_add));

//
//a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.
function maxInteger(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}
console.log(maxInteger(10)); // 55
console.log(maxInteger(15)); // 120

//Sum of Cubes from 1 to n
function sumOfCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i * i;
  }
  return sum;
}
console.log(sumOfCubes(3)); // 36
console.log(sumOfCubes(4)); // 100

//a JavaScript program to compute the sum of all the digits that occur in a given string.
function sumDigits(str) {
  return str
    .split("")
    .filter((char) => /\d/.test(char))
    .reduce((acc, curr) => acc + parseInt(curr), 0);
}
console.log(sumDigits("abc123")); // 6
console.log(sumDigits("12345")); // 15

//a JavaScript program to swap two halves of a given array of integers of even length.
function swapHalves(arr) {
  let middle = arr.length / 2;
  return [...arr.slice(middle), ...arr.slice(0, middle)];
}
console.log(swapHalves([1, 2, 3, 4, 5, 6])); // [4, 5, 6, 1, 2, 3]
console.log(swapHalves([1, 2, 3, 4, 5, 6, 7, 8])); // [5, 6, 7, 8, 1, 2, 3, 4]

//a JavaScript program to change the capitalization of all letters in a given string.
function changeCase(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}
console.log(changeCase("abc")); // "ABC"
console.log(changeCase("ABC")); // "abc"
console.log(changeCase("aBC")); // "Abc"

// a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
function swapPairs(num) {
  return parseInt(
    num
      .toString()
      .match(/../g)
      .map((pair) => pair.split("").reverse().join(""))
      .join("")
  );
}
console.log(swapPairs(123456)); // 2143

//
///
///
///
///
//ES6 JavaScript program
//a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.
const matches = (obj, source) =>
  // Iterate over each key in the source object and check if it exists in the obj object and has the same value.
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
console.log(
  matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
); // true
console.log(
  matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false

//objects
const match = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
console.log(
  match(
    { age: 25, hair: "long", student: true },
    { hair: "long", student: true }
  )
); //true

//Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

// Note: Use String.split('\n') to create a string for each row, then String.split(delimiter) to separate the values in each row. Omit the second argument, delimiter, to use a default delimiter of ,. Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.

// Use Array.prototype.slice() and Array.prototype.indexOf('\n') to remove the first row (title row) if omitFirstRow is true.
// Use String.prototype.split('\n') to create a string for each row, then String.prototype.split(delimiter) to separate the values in each row.
// Omit the second argument, delimiter, to use a default delimiter of ,.
// Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.

const CSV_to_Array = (data, delimiter = ",", omitFirstRow = false) =>
  (omitFirstRow ? data.split("\n").slice(1) : data.split("\n")).map((v) =>
    v.split(delimiter)
  );
console.log(CSV_to_Array("a,b\nc,d")); // [["a", "b"], ["c", "d"]]
console.log(CSV_to_Array("a;b\nc;d", ";")); // [["a", "b"], ["c", "d"]]

// //The

// CSV_to_Array

// function in the provided JavaScript code is designed to convert a CSV (Comma-Separated Values) string into a two-dimensional array. This function takes three parameters:

// data

// ,

// delimiter

// , and

// omitFirstRow

// .

// Here's a detailed explanation of how the function works, along with examples:

// ### Parameters:
// 1. **

// data

// **: The CSV string to be converted.
// 2. **

// delimiter

// **: The character used to separate values in the CSV string. It defaults to a comma (`,`).
// 3. **

// omitFirstRow

// **: A boolean flag indicating whether to omit the first row of the CSV string. It defaults to `false`.

// ### Function Logic:
// 1. **Splitting the Data into Rows**:
//   -

// data.split("\n")

// : This splits the CSV string into an array of rows based on newline characters (`\n`).
//   - If

// omitFirstRow

// is `true`, the first row is omitted by using

// slice(1)

// . Otherwise, the entire array of rows is used.

// 2. **Mapping Rows to Arrays of Values**:
//   - Each row (string) is mapped to an array of values by splitting the row based on the specified

// delimiter

// .

// ### Detailed Steps:
// 1. **Splitting the Data**:
//   -

// data.split("\n")

// : Splits the CSV string into an array of rows. For example, `"a,b\nc,d"` becomes `["a,b", "c,d"]`.

// 2. **Omitting the First Row (if required)**:
//   -

// omitFirstRow ? data.split("\n").slice(1) : data.split("\n")

// : Checks if

// omitFirstRow

// is `true`. If it is, the first row is omitted by using

// slice(1)

// , which removes the first element of the array. If

// omitFirstRow

// is `false`, the entire array of rows is used.

// 3. **Mapping Rows to Arrays**:
//   - `.map((v) => v.split(delimiter))`: Maps each row (string) to an array of values by splitting the row based on the specified

// delimiter

// . For example, `"a,b"` becomes `["a", "b"]`.

// ### Return Value:
// - The function returns a two-dimensional array where each sub-array represents a row of values from the CSV string.

// ### Example Calls:
// 1. **Example 1**:
//   ```javascript
//   console.log(CSV_to_Array("a,b\nc,d")); // [["a", "b"], ["c", "d"]]
//   ```
//   - The CSV string `"a,b\nc,d"` is split into `["a,b", "c,d"]`.
//   - Each row is split by the default comma delimiter, resulting in `[["a", "b"], ["c", "d"]]`.

// 2. **Example 2**:
//   ```javascript
//   console.log(CSV_to_Array("a;b\nc;d", ";")); // [["a", "b"], ["c", "d"]]
//   ```
//   - The CSV string `"a;b\nc;d"` is split into `["a;b", "c;d"]`.
//   - Each row is split by the specified semicolon delimiter, resulting in `[["a", "b"], ["c", "d"]]`.

// ### Code:
// ```javascript
// const CSV_to_Array = (data, delimiter = ",", omitFirstRow = false) =>
//  (omitFirstRow ? data.split("\n").slice(1) : data.split("\n")).map((v) =>
//    v.split(delimiter)
//  );

// console.log(CSV_to_Array("a,b\nc,d")); // [["a", "b"], ["c", "d"]]
// console.log(CSV_to_Array("a;b\nc;d", ";")); // [["a", "b"], ["c", "d"]]
// ```

// This function is useful for parsing CSV data into a more manageable array format, which can then be easily processed or manipulated in JavaScript.

//a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.
const without = (arr, ...args) => arr.filter((v) => !args.includes(v));
console.log(without([2, 1, 2, 3], 1, 2)); // [3]

// a JavaScript program to combine the numbers of a given array into an array containing all combinations.
const allCombos = (arr) =>
  arr.reduce((acc, val) => acc.concat(acc.map((c) => [val].concat(c))), [[]]);
console.log(allCombos([1, 2])); // [[1, 2], [2, 1]]

//2nd approach
const powerset = (arr) =>
  // Reduce the array to generate the powerset.
  arr.reduce(
    // For each element in the array, concatenate it with each element of the accumulated result.
    (a, v) => a.concat(a.map((r) => [v].concat(r))),
    [[]]
  );

// Test cases
console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));

//a JavaScript program to extract values at specified indexes from a specified array.
const extractValues = (arr, indexes) => indexes.map((i) => arr[i]);
console.log(extractValues(["a", "b", "c", "d"], [1, 3])); // ["b", "d"]

//JavaScript program to generate a random hexadecimal color code.
const randomHexColorCode = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");
console.log(randomHexColorCode()); // "#f03665"
console.log(randomHexColorCode()); // "#f09215"

//JavaScript program to generate a random hexadecimal color code.
const HexColorCode = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");
console.log(HexColorCode()); // "#f03665"
console.log(HexColorCode()); // "#f09215"

//Remove Non-Printable ASCII from String
const removeNonASCII = (str) => str.replace(/[^\x20-\x7E]/g, "");
console.log(removeNonASCII("äÄçÇéÉêlorem-ipsumöÖÐþúÚ")); // "lorem-ipsum"
console.log(removeNonASCII("lorem-ipsum")); // "lorem-ipsum"

//a JavaScript program to convert a given string's length to bytes.
const byteSize = (str) => new Blob([str]).size;
console.log(byteSize("😀<3")); // 6
console.log(byteSize("Hello World")); // 11

//a JavaScript program to replace multiple object keys' names with the values provided.
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
const obj = { name: "Bobo", job: "Front-End Master", shoeSize: 100 };
console.log(renameKeys({ name: "firstName", job: "passion" }, obj)); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }

//JavaScript program to round a number to a specified amount of digits
const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
console.log(round(1.005, 2)); // 1.01
console.log(round(1.005)); // 1

//JavaScript program to create an object composed of the properties the given function returns false for. The function is invoked with two arguments: (value and key).
const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
console.log(pickBy({ a: 1, b: "2", c: 3 }, (v) => typeof v === "number")); // { a: 1, c: 3 }

//a JavaScript program to redirect to a specified URL.
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
console.log(redirect("https://www.w3resource.com", false)); // (redirects to the specified URL)

//Error Handling
// try catch block
//a JavaScript program to validate an integer using try catch method.Error handling
function validateInt(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Invalid input number. Please enter a valid integer.");
  }
  console.log("Valid input number.", number);
}

try {
  validateInt("hello");
} catch (error) {
  console.log("Error:", error.message);
}

try {
  validateInt(5);
} catch (error) {
  console.log("Error:", error.message);
}

try {
  validateInt(3.14);
} catch (error) {
  console.log("Error:", error.message);
}

//JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.
try {
  const obj = undefined;
  console.log(obj.prop);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Caught TypeError:", error.message);
  } else {
    throw error;
  }
}

try {
  const obj = undefined;
  console.lof(obj.prop);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Caught TypeError:", error.message);
  } else {
    throw error;
  }
}

//JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.
function divide(n1, n2) {
  if (n2 === 0) {
    throw new Error("Error :cannot divide by zero");
  }
  return n1 / n2;
}
try {
  console.log(divide(2, 0));
} catch (error) {
  console.log(error.message);
}
try {
  console.log(divide(2, 2));
} catch (error) {
  console.log(error.message);
}

// JavaScript program to check if the number is positive or not
function CheckPositiveNumber(n2) {
  if (n2 < 0) {
    throw new Error("Error :Cannot be a negative number");
  }
  return n2;
}
try {
  console.log(CheckPositiveNumber(2));
} catch (error) {
  console.log(error.message);
}
try {
  console.log(CheckPositiveNumber(-2));
} catch (error) {
  console.log(error.message);
}

// a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.
function CheckArray(array) {
  if (array.length === 0) {
    throw new Error("aray is empty");
  }
  return array;
}
try {
  console.log(CheckArray([]));
} catch (error) {
  console.log(error.message);
}
try {
  console.log(CheckArray([1, 211, 1]));
} catch (error) {
  console.log(error.message);
}

// a JavaScript function that takes an string as a parameter and throws a custom 'Error' if the array is empty.
function CheckString(str) {
  if (str.length === 0) {
    throw new Error("String is empty");
  }
  return str;
}
try {
  console.log(CheckString([]));
} catch (error) {
  console.log(error.message);
}
try {
  console.log(CheckString(["bishal"]));
} catch (error) {
  console.log(error.message);
}

//Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.
try {
  const arr = [1, 2, 3];
  console.log(arr[10]);
} catch (error) {
  if (error instanceof RangeError) {
    console.log("Caught RangeError:", error.message);
  } else {
    throw error;
  }
}

function checkArrayIndex(arr, index) {
  if (index < 0 || index >= arr.length) {
    throw new RangeError("Invalid index");
  }
  return arr[index];
}
const arr = [1, 2, 3];
try {
  console.log(checkArrayIndex(arr, 10));
} catch (error) {
  console.log(error.message);
}
// Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.
try {
  const obj = undefined;
  console.log(obj.prop);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Caught TypeError:", error.message);
  } else {
    throw error;
  }
}
try {
  const arr = [1, 2, 3];
  console.log(arr[10]);
} catch (error) {
  if (error instanceof RangeError) {
    console.log("Caught RangeError:", error.message);
  } else {
    throw error;
  }
}

//Write a JavaScript program that uses a try-catch block to catch and handle a `URIError` when decoding an invalid URI.
try {
  decodeURI("%");
} catch (error) {
  if (error instanceof URIError) {
    console.log("Caught URIError:", error.message);
  } else {
    throw error;
  }
}

//JavaScript program that demonstrates the use of the 'try-catch-finally' statement to catch and handle an error, and then execute some cleanup code in the 'finally' block.
try {
  throw new Error("An error occurred");
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("Cleanup code executed");
}

// example 2
function divide(n1, n2) {
  try {
    if (n2 === 0) {
      throw new Error("Error: Cannot divide by zero");
    }
    return n1 / n2;
  } catch (error) {
    console.log("Caught error:", error.message);
  } finally {
    console.log("Execution completed");
  }
}
console.log(divide(2, 0));
console.log(divide(2, 2));

//JavaScript program that uses a try-catch block to catch and handle an 'EvalError' when evaluating an invalid expression.
try {
  eval("x+++");
} catch (error) {
  if (error instanceof EvalError) {
    console.log("Caught EvalError:", error.message);
  } else {
    throw error;
  }
}

//javaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable.
try {
  console.log(undefinedVariable);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Caught ReferenceError:", error.message);
  } else {
    throw error;
  }
}

//JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.
try {
  JSON.parse("{ key: 'value' }");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Caught SyntaxError:", error.message);
  } else {
    throw error;
  }
}

//JavaScript functions
//reverse a number
function reverseNumber(n) {
  return n.toString().split("").reverse().join("");
}
console.log(reverseNumber(12345)); //54321

//Check Palindrome
function isPalindrome(n) {
  return n.toString() === n.toString().split("").reverse().join("");
}
console.log(isPalindrome(121)); //true
console.log(isPalindrome(123)); //false

//String Combinations
function stringCombinations(str) {
  let result = [];
  let f = (prefix, str) => {
    for (let i = 0; i < str.length; i++) {
      result.push(prefix + str[i]);
      f(prefix + str[i], str.slice(i + 1));
    }
  };
  f("", str);
  return result;
}
console.log(stringCombinations("abc")); //["a", "ab", "abc", "ac", "b", "bc", "c"]

//Sort String Alphabetically
function sortString(str) {
  return str.split("").sort().join("");
}
console.log(sortString("webmaster")); //abeemrstw
console.log(sortString("bishal")); //abhils

//Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world")); //Hello World

//Find Longest Word
function longestWord(str) {
  return str.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
}
console.log(longestWord("Web Development Tutorial")); //Development

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function CounterV(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count += 1;
    }
  }
  return count;
}

console.log(CounterV("Bishal")); // 2
console.log(CounterV("Hello")); // 2
console.log(CounterV("JavaScript")); // 3

//Check Prime Using Recursion
function isPrime(n, i = 2) {
  if (n <= 2) {
    return n === 2;
  }
  if (n % i === 0) {
    return false;
  }
  if (i * i > n) {
    return true;
  }
  return isPrime(n, i + 1);
}
console.log(isPrime(7)); //true
console.log(isPrime(10)); //false

//Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function checkType(value) {
  return typeof value;
}
console.log(checkType(5)); //number
console.log(checkType("Hello")); //string
console.log(checkType(true)); //boolean
console.log(checkType({})); //object
console.log(checkType(undefined)); //undefined

//Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers
function secondLowestGreatest(arr) {
  arr.sort();
  return [arr[1], arr[arr.length - 2]];
}
console.log(secondLowestGreatest([1, 2, 3, 4, 5])); // [2, 4]

//js program to check if a number is a perfect number or not
function isPerfectNumber(num) {
  if (num <= 1) return false;

  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}

// Example usage
console.log(isPerfectNumber(6)); // true (6 = 1 + 2 + 3)
console.log(isPerfectNumber(28)); // true (28 = 1 + 2 + 4 + 7 + 14)
console.log(isPerfectNumber(12)); // false
console.log(isPerfectNumber(496)); // true (496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248)

// factor of a number
function FactorNumber(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(FactorNumber(15)); //[1, 3, 5, 15]
console.log(FactorNumber(10)); //[1, 2, 5, 10]
console.log(FactorNumber(20)); //[1, 2, 4, 5, 10, 20]

//// Define a function named exp that calculates the result of raising a base (b) to a power (n)
function exp(b, n) {
  return b ** n;
}
console.log(exp(2, 3)); // 8
console.log(exp(3, 2)); // 9
console.log(exp(4, 0)); // 1

////JavaScript function to extract unique characters from a string.
function UniqueCharacter(str) {
  let result = new Set(str);

  return result.join("");
}
console.log(UniqueCharacter("bishalrauniyar")); //bishalruny
console.log(UniqueCharacter("javascript")); //javscript

////a JavaScript function to get the number of occurrences of each letter in a specified string.
function countOccurrences(str) {
  return str.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

console.log(countOccurrences("Bishal")); // { B: 1, i: 1, s: 1, h: 1, a: 1, l: 1 }
console.log(countOccurrences("hello")); // { h: 1, e: 1, l: 2, o: 1 }
console.log(countOccurrences("javascript")); // { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

////Write a JavaScript function that returns array elements larger than a number.
function LargerThanNumber(array, number) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(LargerThanNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); //[6,7,8,9]
console.log(LargerThanNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //[4,5,6,7,8,9]

//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
//a JavaScript function to generate a random alphanumeric string.
function randomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log(randomString(8)); // "eA9bF3cD"
console.log(randomString(12)); // "gH8iJ4jK6lL"

//Count Letter in String SPECIFIC
//Count Letter in String Specific

function CharacterCount(str, char) {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === char) {
      count += 1;
    }
  }
  return count;
}
console.log(CharacterCount("BishalRauniyar", "a"));

//Find First Non-Repeated Character
function NonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null; // Return null if no non-repeated character is found
}

console.log(NonRepeatedChar("abacddbec")); // 'e'
console.log(NonRepeatedChar("aabbcc")); // null
console.log(NonRepeatedChar("swiss")); // 'w'

//end of today date 12/12/2024

//Starting date 13/12/2024

// javascript program to return the number that is bigger than the number in the array
function biggerNumber(arr, num) {
  return arr.filter((number) => number >= num);
}
console.log(biggerNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); //[5,6,7,8,9]
console.log(biggerNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //[3,4,5,6,7,8,9]

//Recursions

// JavaScript program to calculate the factorial of a number using recursion.
function factorials(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorials(n - 1);
}
console.log(factorials(5));

// JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.
var gcd = function (a, b) {
  // Base case: if b is 0, then GCD is a.
  if (!b) {
    return a;
  }

  // Recursive case: calculate GCD using the remainder (a % b).
  return gcd(b, a % b);
};
console.log(gcd(336, 360));
console.log(gcd(2154, 458));

//JavaScript program to get integers in the range (x, y) using recursion.
function range(x, y) {
  if (y - x === 2) {
    return [x + 1];
  } else {
    var list = range(x, y - 1);
    list.push(y - 1);
    return list;
  }
}
console.log(range(2, 9)); //[3,4,5,6,7,8]

// JavaScript program to compute the sum of an array of integers using recursion.
function sumOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sumOfArray(arr.slice(1));
  }
}

// JavaScript program to compute the exponent of a number using recursion.
//// JavaScript program to compute the exponent of a number using recursion.
function expo(base, power) {
  if (power === 0) {
    return 1;
  }
  return base * expo(base, power - 1);
}
console.log(expo(5, 3));

//Write a JavaScript program to get the first n Fibonacci numbers.
function fibonacci(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}
console.log(fibonacci(5)); //[0, 1, 1, 2, 3, 5]
console.log(fibonacci(10)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//JavaScript program to check whether a number is even or not.  using recursion
function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}
console.log(isEven(5)); //false
console.log(isEven(4)); //true

// Variables to control loop counters and character output
// *****
// ****
// ***
// **
// *

var x, y, chr;

// Outer loop for rows
for (x = 5; x >= 1; x--) {
  chr = "";
  // Inner loop for characters in each row
  for (y = 1; y <= x; y++) {
    // Accumulate asterisks in the 'chr' variable
    chr = chr + "*";
  }

  // Print the accumulated characters for the current row
  console.log(chr);

  // Reset 'chr' for the next row
}

//JavaScript program to sum 3 and 5 multiples under 100000.
function sumMultiples() {
  let sum = 0;
  for (let i = 0; i < 100000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumMultiples()); // 2333316668

// JavaScript function that fetches data from multiple  APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

const API_URL1 = "https://jsonplaceholder.typicode.com/posts/1";
const API_URL2 = "https://jsonplaceholder.typicode.com/posts/2";

const fetchData = async () => {
  try {
    const [response1, response2] = await Promise.all([
      fetch(API_URL1),
      fetch(API_URL2),
    ]);
    const data1 = await response1.json();
    const data2 = await response2.json();
    return { data1, data2 };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

//API Fetching

const apipractice = "https://jsonplaceholder.typicode.com/todos/1";
fetch(apipractice)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));

// Function to fetch data from the API
async function fetchData() {
  try {
    // Make the API request
    const response = await fetch(apiEndpoint);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON data
    const data = await response.json();

    // Log the data to the console
    console.log(data);
  } catch (error) {
    // Handle any errors
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Call the fetchData function
fetchData();

//// oop conceprts

// JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
class person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  display() {
    console.log(`Name=${this.name}`);
    console.log(`Age =${this.age}`);
    console.log(`Country=${this.country}`);
  }
}
person1 = new person("Bishal", 23, "Nepal");
person2 = new person("Sujan", 24, "Nepal");

person1.display();
person2.display();

//JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const Rectangle1 = new Rectangle(5, 6);
const Rectangle2 = new Rectangle(10, 12);

console.log("Area of rectangle 1 is " + Rectangle1.area());
console.log("Perimeter of rectangle 1 is " + Rectangle1.perimeter());
console.log("Area of rectangle 2 is " + Rectangle2.area());
console.log("Perimeter of rectangle 2 is " + Rectangle2.perimeter());

//Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display  vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  display() {
    console.log(`Make=${this.make}`);
    console.log(`Model=${this.model}`);
    console.log(`Year=${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  display() {
    super.display();
    console.log(`Doors=${this.doors}`);
  }
}

const car1 = new Car("Toyota", "corolla", 2020, 4);
car1.display();

//Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  display() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Balance: ${this.balance}`);
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}`);
    }
  }
}

const account1 = new BankAccount(123456, 5000);
account1.display();
account1.deposit(2000);
account1.display();
account1.withdraw(3000);
account1.display();
account1.withdraw(5000);
account1.display();
