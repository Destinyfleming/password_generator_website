// Assignment Code
//Create variables to use throughout the code
var generateBtn = document.querySelector("#generate");

var specialArr =['@','%','+','/',"'",'!','#','$','?',':',')','(','}','{',']','[','~','-','_','.']
var numArr =[1,2,3,4,5,6,7,8,9,0]
var lowercaseArr =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercaseArr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// prompt user for password values

var passwordLength = prompt('How long would you like your password?')
if (length < 8) {
  alert('Your password has to be at least 8 characters long.');
  return;
}else (length > 128) {
  alert('Your password has to have less then 128 characters.');
  return;
}
var confirmSpecial = confirm('Would you like your password to contain special characters?')
var confirmNumber = confirm('Would you like your password to contain numbers?')
var confirmLower = confirm('Would you like your password to contain lowercase letters?')
var confirmUpper = confirm('Would you like your password to contain uppercase letters?')

// tells what user entered
var passwordCritera = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters
};

return passwordCritera;
//get random things from corresponding arrays based on users answers to prompts

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
