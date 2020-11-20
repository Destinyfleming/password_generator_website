var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var passLength = prompt("How many characters would you like your password? Choose between 8 and 128")
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',"O",'P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n',"o",'p','q','r','s','t','u','v','w','x','y','z']
var numberArr = [0,1,2,3,4,5,6,7,8,9]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var generateBtn = document.querySelector("#generate"); document.getElementById('generateBtn')



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
alert(passLength)
function generatePassword() {
  
}
  