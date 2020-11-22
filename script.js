
var newPass = ""
var passLength = prompt("How many characters would you like your password? Choose between 8 and 128")
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',"O",'P','Q','R','S','T','U','V','W','X','Y','Z']
var randomUpp = upperCase[Math.floor(Math.random() * upperCase.length)];
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n',"o",'p','q','r','s','t','u','v','w','x','y','z']
var randomLow = lowerCase[Math.floor(Math.random() * lowerCase.length)];
var numberArr = [0,1,2,3,4,5,6,7,8,9];
var randomNum= numberArr[Math.floor(Math.random() * numberArr.length)];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var randomSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];
var generateBtn = document.querySelector("#generate"); document.getElementById('generateBtn')



function generatePassword(){

alert(passLength)

if (passLength > 128) {
  alert("please put a value between 8 and 128.");
}
else  (passLength < 8) {
  alert("please put a value between 8 and 128.");
}
else {
  var doYouUpper = confirm('Do you want upper case letters?');
  var doYouLower = confirm('Do you want lower case letters?');
  var doYouSpecial = confirm('Do you want special characters?');
  var doYouNumber = confirm ('Do you want numbers?');
}

while (doYoulower == false && doYouUpper == false && doYouNumber == false && doYouSpecial == false) {
  alert("Please select one type of character");
  doYouUpper = confirm('Do you want upper case letters?');
  doYouLower = confirm('Do you want lower case letters?');
  doYouSpecial = confirm('Do you want special characters?');
  doYouNumber = confirm ('Do you want numbers?');
}
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};