
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