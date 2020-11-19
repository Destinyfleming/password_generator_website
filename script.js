// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',"O",'P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n',"o",'p','q','r','s','t','u','v','w','x','y','z']
var numberArr = [0,1,2,3,4,5,6,7,8,9]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var generateBtn = document.querySelector("#generate"); document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log (generatePassword())
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  // Else if for 4 negative options
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");

  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = character.concat(number, alpha, alpha2);
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
