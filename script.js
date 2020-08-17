// Variables

//Password Variable
var pwd = '';

//Criteria Variables
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialcharacters = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

//Criteria Selection Varriables
var lowercaseSelection = false;
var uppercaseSelection = false;
var numbersSelection = false;
var specialcharactersSelection = false;


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

    if (confirm("Will password contain numerical characters?") == true) {numbersSelection = true}

    if (confirm("Will password contain special characters?") == true) {specialcharactersSelection = true}
    
    //Confirmation of Criteria Prompts
    if (lowercaseSelection === false && uppercaseSelection === false && numbersSelection === false && specialcharactersSelection === false) {alert("Password MUST contain at least 1 character type.")}
  }

  //Random Characters
    var characters = '';
    characters += (lowercaseSelection ? lowercase : '');
    characters += (uppercaseSelection ? uppercase : '');
    characters += (numbersSelection ? numbers : '');
    characters += (specialcharactersSelection ? specialcharacters : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.ceil(Math.random() * characters.length));
    }
    return pwd;
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
