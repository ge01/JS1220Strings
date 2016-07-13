/****************************************************
*                 JavaScript Strings                *
****************************************************/
var carName1 = "Volvo XC60";
var carName2 = "Volvo XC60";

document.getElementById("string1").innerHTML =
carName1 + "<br>" + carName2;

var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';

document.getElementById("string2").innerHTML =
answer1 + "<br>" + answer2 + "<br>" + answer3;

/****************************************************
*                   String Length                   *
****************************************************/
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("length").innerHTML =
txt.length;

/****************************************************
*                 Special Characters                *
****************************************************/
var x = 'It\'s alright';
var y = "We are the so-called \"Vikings\" from the north.";

document.getElementById("special").innerHTML = x + "<br>" + y;

/****************************************************
*                Strings Can be Objects             *
****************************************************/
var x = "John";              // x is a string
var y = new String("John");  // y is an objec

document.getElementById("object").innerHTML = typeof x + "<br>" + typeof y;
