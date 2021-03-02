// Assignment Code
var generateBtn = document.querySelector("#generate");

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var letterArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var charArr = ['`','!','@','@','#','$','<','.','>','/','?','*','^','&','%']

/*function passwordLength(){
  var length = prompt('How long do you want your password? Should be between 8 and 128 characters.');
if(length <8){
  alert('please choose a higher number.')
}else if(length >128){
  alert('please choose a lower number.')
}else{
  generatePassword()
}}
*/
function generatePassword(){
  var length = prompt('How long do you want your password? Should be between 8 and 128 characters.');
  if(length <8){
    alert('please choose a higher number.')
  }else if(length >128){
    alert('please choose a lower number.')
  }else{
    var DoYouNum = confirm('Do you want numbers?');
    var DoYouLett = confirm('Do you want letters?');
    var DoYouChar = confirm('Do you want special characters?');
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);