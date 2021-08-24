// the code which generates the password dispalys it on screen after the button is clicked
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

// Go through the various password conditons and then add them to the key
var passwordLength = Number(window.prompt("Desired password length: No less than 8 and no more than 128", "8"));
  
  // get the password length
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters");
  }

  // include lower case letters or not 
var lowerCase = window.confirm("Include lower case letters?") 

  if (lowerCase == true) {
    window.alert("Lower case letters will be included");
    keySet = keySet + lowCase;
  } else {
    window.alert("Lower case letters will NOT be included");
  }

  // include upper case letters or not
var upperCase = window.confirm("Inlcude upper case letters?")

  if (upperCase == true) {
    window.alert("Upper case letters will be included")
    keySet = keySet + uppCase;
  } else {
    window.alert("Upper case letters will NOT be included")
  }

  // include numeric character or not
var numeric = window.confirm("Include numeric characters?")

  if (numeric == true) {
    window.alert("Numeric characters will be included")
    keySet = keySet + num;
  } else {
    window.alert("Numeric characters will NOT be included")
  }

  // include special characters or not
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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// add a listerner 
generateBtn.addEventListener("click", myCode)