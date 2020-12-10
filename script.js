//grab brn from html to manipulate
var generateBtn = document.querySelector("#generate");

//Make variables for the password options
var uppercaseLet= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercaseLet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var numberChar = [0,1,2,3,4,5,6,7,8,9];

//add an event listener
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}