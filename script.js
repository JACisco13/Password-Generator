// Variables

//Criteria Variables
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialcharacter = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

//Criteria Selection Varriables
var lowercaseSelection = false;
var uppercaseSelection = false;
var numberSelection = false;
var specialcharacterSelection = false;

//Password Variable
var pswrd = '';

//Generate Function
function generate() {
    var confirmLength = '';

    //User Character Length Input
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {confirmLength = prompt("How long would like your password? (MUST be between 8 to 128 characters)");
        if (confirmLength === null) {break;}
    }


  //Password Criteria Prompts
  if (confirmLength) {
    if (confirm("Will password contain lowercase characters?") == true) {lowercaseSelection = true} 

    if (confirm("Will password contain uppercase characters?") == true) {uppercaseSelection = true}

    if (confirm("Will password contain numerical characters?") == true) {numberSelection = true}

    if (confirm("Will password contain special characters?") == true) {specialcharacterSelection = true}
    
    //if none of the character types are selected, alerts the user to choose at least one
    if (lowercaseSelection === false && uppercaseSelection === false && numberSelection === false && specialcharacterSelection === false) {alert("Password MUST contain at least 1 character type.")}
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
