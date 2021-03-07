// Assignment Code
var generateBtn = document.querySelector("#generate");

var numArr = [1,2,3,4,5,6,7,8,9,0]
var letterArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var charArr = ['`','!','@','@','#','$','<','.','>','/','?','*','^','&','%']
var userPass =''


function generatePassword(){

  var passLength = prompt('How long do you want your password? Should be between 8 and 128 characters.');
  
  if(passLength <8){
    alert('please choose a higher number.')
  }else if(passLength >128){
    alert('please choose a lower number.')
  }else{

    var DoYouNum = confirm('Do you want numbers?');
    var DoYouLett = confirm('Do you want letters?');
    var DoYouChar = confirm('Do you want special characters?');

    if(DoYouNum === true && DoYouChar === true && DoYouLett === true){
    //random generate from each arr
    console.log(userPass)
    userPass = charArr.concat(letterArr, numArr) 
    }else if(DoYouNum === false && DoYouChar === true && DoYouLett === true){
      //random generate char + lett
      userPass = charArr.concat(letterArr);
    }else if (DoYouNum === true && DoYouChar === false && DoYouLett === true){
      //random generate num + let
      userPass = numArr.concat(letterArr);
    }else if (DoYouNum === true && DoYouChar === true && DoYouLett === false){
      //random generate num + char
      userPass = numArr.concat(charArr);
    }else if (DoYouNum === false && DoYouChar === false && DoYouLett === true){
      //random generate let
      userPass = letterArr
    }else if (DoYouNum === false && DoYouChar === true && DoYouLett === false){
      //random generate char 
      userPass = charArr
    }else if (DoYouNum === true && DoYouChar === false && DoYouLett === false){
       //random generate num
       for (var i = 0 ; i === passLength.length; i++)
      {
        Math.floor(Math.random() * 10);
      } 
    }else {
      alert('please click generate password button again and pick at least one field.')
    }
    return userPass
}}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);