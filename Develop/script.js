// Assignment code here
var passwordLength = 8;
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];
var promptArray = [];

function generatePassword() {
  var generatedPassword = "";
  //for loop to generate random characters based on the promptArray selected by the user
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * promptArray.length);
    generatedPassword = generatedPassword + promptArray[randomIndex];
  }
  return generatedPassword;
}

function getPrompts() {
  promptArray = [];
  //use parseInt to convert string to a rounded integer
  passwordLength = parseInt(prompt("How many characters would you like your password to have? Chose a number between 8-128"));

  //use isNaN to confirm the length of password was entered in numerical value. check that the value was between 8 and 128
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid answer. Please enter a numerical value between 8-128.");
    return false;
  }

  //prompt user of different character options
  if (confirm("Would you like your password to contain lowercase letters?")) {
    promptArray = promptArray.concat(lowerCase);
  }
  if (confirm("Would you like your password to contain uppcase letters?")) {
    promptArray = promptArray.concat(upperCase);
  }
  if (confirm("Would you like your password to contain numbers?")) {
    promptArray = promptArray.concat(numbers);
  }
  if (confirm("Would you like your password to contain special characters?")) {
    promptArray = promptArray.concat(specialCharacters);
  }
  return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  //if prompts are answered correctly password will generate, if not no new password will be generated
  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
