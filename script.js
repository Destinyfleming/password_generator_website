
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',"O",'P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n',"o",'p','q','r','s','t','u','v','w','x','y','z']
var numberArr = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var generateBtn = document.querySelector("#generate"); document.getElementById('generateBtn')
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;
var passLength;

generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  passLength = prompt ('How long do you want your password? Choose between 8-128.')

  if (passLength > 128) {
    alert("please put a value between 8 and 128.");
  }
  else if (passLength < 8) {
    alert("please put a value between 8 and 128.");
  }
  else {
    confirmUpper= confirm('Do you want upper case letters?');
    confirmLower = confirm('Do you want lower case letters?');
    confirmSpecial = confirm('Do you want special characters?');
    confirmNumber= confirm ('Do you want numbers?');
  };

  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose a criteria");
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numberArr, specialChar);
    ;
  }

  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbersArr);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, specialChar);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbersArr, specialChar);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbersArr, specialChar);
    console.log(userChoices);
  }

  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbersArr);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(specialChar);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbersArr);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(specialChar);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(specialChar);
    console.log(userChoices);
  }

  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbersArr;
    console.log(userChoices);
  }
  else if (confirmSpecial) {
    userChoices = specialChar;
    console.log(userChoices);
  };
}


var passwordBlank = [];
  
for (var i = 0; i < passLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);

  var password = passwordBlank.join("");
  alert("Your Pasword is: " + password);
  return password;
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};