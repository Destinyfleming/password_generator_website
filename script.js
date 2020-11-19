// Assignment Code

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',"O",'P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n',"o",'p','q','r','s','t','u','v','w','x','y','z']
var numberArr = [0,1,2,3,4,5,6,7,8,9]
var answerEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var numberEl = document.getElementById("number");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var symbolEl = document.getElementById("symbol");
var copyEl = document.getElementById("copy");
var generateEl = document.getElementById("generate")


var generateBtn = document.querySelector("#generate");

var passLength = prompt('How many characters do you want in your password.')

alert =(passLength)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomUpperCase(){

  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
}

const randomFunc = {
  upper : getRandomUpperCase,
  lower : getRandomLowerCase,
  number : getRandomNumber,
  symbol : getRandomSymbol
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
