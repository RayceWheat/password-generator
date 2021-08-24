// Assignment code here

function myCode() {
// array with all lower case letters 
var lowCase = 'abcdefghijklmnopqrstuvwxyz'
// array with all upper case letters
var uppCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// array with all numeric characters
var num = '0123456789'
// array with all special characters 
var speChar = '!\"#$%&\'()*+,-./:;<=>?@[]\\^_`{|}~'

// intalize an empty keySet which will be filled with the characters used in the password
var keySet = ""

// Empty array which will hold the password string 
var passWord = ""

var passwordLength = Number(window.prompt("Desired password length: No less than 8 and no more than 128", "8"));
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters");
  }

var lowerCase = window.confirm("Include lower case letters?") 

  if (lowerCase == true) {
    window.alert("Lower case letters will be included");
    keySet = keySet + lowCase;
    console.log(keySet)
  } else {
    window.alert("Lower case letters will NOT be included");
  }

var upperCase = window.confirm("Inlcude upper case letters?")

  if (upperCase == true) {
    window.alert("Upper case letters will be included")
    keySet = keySet + uppCase;
  } else {
    window.alert("Upper case letters will NOT be included")
  }

var numeric = window.confirm("Include numeric characters?")

  if (numeric == true) {
    window.alert("Numeric characters will be included")
    keySet = keySet + num;
  } else {
    window.alert("Numeric characters will NOT be included")
  }

var specialChar = window.confirm("Include special characters?") 

  if (specialChar == true) {
    window.alert("Special characters will be included")
    keySet = keySet + speChar;
  } else { 
    window.alert("Speical characters will NOT be included")
  }

// if lowercase, uppercase, and special characters are not included prompt user to include at least one

if (!lowerCase && !upperCase && !specialChar && !numeric) {
  window.alert("Please include at least 1 of the following: lowercase, uppercase, numeric, or special characters")
  return myCode();
}

keySetLen = keySet.length

console.log(keySetLen)

// Random number function 
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
};

// generate the password
for (var i = 0; i < passwordLength; i++) {
passWord += keySet[randomNumber(0, keySetLen)]
}

// code to select the password text area 
var passwordText = document.querySelector("#password");

// shows the password on screen
passwordText.value = passWord;

}

// -> Create a series of prompts for passward critea 
// -> Length at least 8 characters no more than 128
// -> lowercase, uppercase, numeric, and/or special characters
// -> my input should be validated and at least one character type must be selected
// -> After prompts are answered a password is generated
// -> The password is then disaplyed in alert or written 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


// on click run my code
// after code show password

generateBtn.addEventListener("click", myCode)