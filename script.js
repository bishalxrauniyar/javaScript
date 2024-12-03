
// counter app
var count = 0;
document.getElementById("counter").innerHTML = count;
increment.onclick = function() {
    count += 1;
    document.getElementById("counter").innerHTML = count;
}
decrement.onclick = function() {
    if(count>0){
    count -= 1;
    document.getElementById("counter").innerHTML = count;
    }
}
reset.onclick = function() {
    count = 0;
    document.getElementById("counter").innerHTML = count;
}






//example 1

// Get the current date and time
var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 


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
    dd = '0' + dd;
} 

// Add leading zero if the month is less than 10
if (mm < 10) {
    mm = '0' + mm;
} 

// Format the date as mm-dd-yyyy and log it
today = mm + '-' + dd + '-' + yyyy;
console.log(today);

// Format the date as mm/dd/yyyy and log it
today = mm + '/' + dd + '/' + yyyy;
console.log(today);


// Format the date as dd-mm-yyyy and log it
today = dd + '-' + mm + '-' + yyyy;
console.log(today);


// Format the date as dd/mm/yyyy and log it
today = dd + '/' + mm + '/' + yyyy;
console.log(today); 





//guess the number game (between 1 and 10)
var num=math.ceil(math.random()*10);
console.log(num);
var guess=prompt('Guess the number between 1 and 10');
if(guess==num){
    alert('Congratulations! You guessed the correct number.');
 } else
 console.log('Sorry. The number was ' + num + '.');

 
 
 
 
 //check if the year 1st jan is a sunday or not

 for(var year=2014;year<=2050;year++){
    var d = new Data(year,0,1);
    if(d.getDay()===0){
        console.log("1st jan is sunday in year "+year)
    }
 }




 //rotate string from left to right

 var str ="bishal";
 var n=2;
    var left= str.substring(0,n);
    var right= str.substring(n,str.length);
    console.log(right+left);

    //check if the year given is a leap year or not
    var year = prompt('Enter the year');
    function leapyear(year){
        return (year%100===0)?(year%400===0):(year%4===0);
    }
    console.log(leapyear(year));
   


    //calculate the area of a triangle
    var side1 = 5;
    var side2 = 6;
    var side3 = 7;
    var s = (side1+side2+side3)/2;
    var area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
    console.log(area);



    
    //Write a JavaScript program to calculate the days left before Christmas.
    var today = new Date();
    var cmas = new Date(today.getFullYear(),11,25);
    if(today.getMonth()==11 && today.getDate()>25){
        cmas.setFullYear(cmas.getFullYear()+1);
    }
    var one_day = 1000*60*60*24;
    console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+' days left until Christmas!');

    //program to calculate multiplication and division of two numbers
    function multiply() {
        var num1 = document.getElementById('num1').value;
        var num2 = document.getElementById('num2').value;
        if (num1 === "" || num2 === "") {
            document.getElementById('result').innerHTML = "Please enter both numbers.";
            return;
        }
        var result = num1 * num2;
        document.getElementById('result').innerHTML = result;
    }

    function divide() {
        var num1 = document.getElementById('num1').value;
        var num2 = document.getElementById('num2').value;
        if (num1 === "" || num2 === "") {
            document.getElementById('result').innerHTML = "Please enter both numbers.";
            return;
        }
        if (num2 == 0) {
            document.getElementById('result').innerHTML = "Cannot divide by zero.";
            return;
        }
        var result = num1 / num2;
        document.getElementById('result').innerHTML = result;
    }


    // Declare a variable named var_name and assign it the string 'abcd'
var var_name = 'abcd';

// Declare a variable named n and assign it the number 120
var n = 120;

// Assign the value of n to the property named 'abcd' of the 'this' object
this[var_name] = "BISHAL";

// Log the value of the property 'abcd' of the 'this' object to the console
console.log(this[var_name]); 


//program to find the file extension of a filename

filename = "system.php";

        // Log the result of extracting the file extension using split and pop to the console
        console.log(filename.split('.').pop());


// program to check if two number are same then return triple their sum else return their sum
function check(x, y) {
    return x === y ? (x + y) * 3 : x + y;
}
console.log(check(10, 11));


//program to check if any of the two numbers is 50 then return true , if sum of two numbers is 50 then return true else return false
function checkfifty(a,b){
    if (a===50 || b===50){
        return true;
    }else if (a + b == 50){
        return true;
    }else
    return false;
}
console.log(checkfifty(10,20));
console.log(checkfifty(10,50));
console.log(checkfifty(10,40));




//JavaScript program to check whether a given integer is within 20 of 100 or 400
function checkhundred(x){
    return (Math.abs(100-x)<=20) || (Math.abs(400-x)<=20);
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
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
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
  function remove_character(str, char_pos) 
  {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
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
    console.log(first_last('BISHAL'));

    //Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  