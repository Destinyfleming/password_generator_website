
/*var doYouUpper = confirm('Do you want upper case letters?')
var doYouLower = confirm('Do you want lower case letters?')
var doYouSpecial = confirm('Do you want special characters?')
var doYouNumber = confirm ('Do you want numbers?')*/
var passLength = prompt("How many characters would you like your password? Choose between 8 and 128")
//var userInput = document.getElementById('userInput').value;
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',"O",'P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n',"o",'p','q','r','s','t','u','v','w','x','y','z']
var numberArr = [0,1,2,3,4,5,6,7,8,9]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var generateBtn = document.querySelector("#generate"); document.getElementById('generateBtn')


console.log(passLength)
// Write password to the #password input

function userInput(){
var input = document.getElementById("userInput");
alert(input);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

function generatePassword(passLength){

alert(passLength);
}

if (passLength > 128) {
  alert("please put a value between 8 and 128.");
}
else if (passLength < 8) {
  alert("please put a value between 8 and 128.");
}
else {
  var doYouUpper = confirm('Do you want upper case letters?')
  var doYouLower = confirm('Do you want lower case letters?')
  var doYouSpecial = confirm('Do you want special characters?')
  var doYouNumber = confirm ('Do you want numbers?')
}