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
