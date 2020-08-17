// Assignment code here
var password = '';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '01234567890';
var specialCharacter = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';

function generate() {
  var confirmPasswordLength = '';

  while (isNaN(confirmPasswordLength)) || confirmPasswordLength < 8 || confirmPasswordLength > 128) {confirmPasswordLength = prompt("What length would you like for this password? MUST BE 8 to 128 characters")}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
