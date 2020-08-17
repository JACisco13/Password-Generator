// Variables
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialcharacter = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var lowercaseSelection = false;
var uppercaseSelection = false;
var numberSelection = false;
var specialcharacterSelection = false;
var pswrd = '';

//Generate Function
function generate() {
    var confirmLength = '';
//asking user to input desired character length
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {confirmLength = prompt("How long would like your password? (MUST be between 8 to 128 characters)");
        if (confirmLength === null) {break;}
    }

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
