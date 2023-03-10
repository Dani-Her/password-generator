// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let allCharacters = [];
  let endResult = [];
  let validatorCounter = 0;

  charLength = prompt("How long would you like the password to be?");

  if (charLength > 7 && charLength < 129) {
  } else {
    return "Please choose password length between 8 and 128 digits!";
  }

lowerChar = confirm("Any lower case characters?");

if (lowerChar) {
  allCharacters = allCharacters.concat(lowerChar);
  var rand = getRandoInteg(lowerChar.length);
  endResult.push(lowerChar[rand]);
  validatorCounter++;
}

upperCase = confirm(
  "Any upper case characters?"
);
if (upperCase) {
  allCharacters = allCharacters.concat(upperCase);
  var rand = getRandoInteg(upperCase.length);
  endResult.push(upperCase[rand]);
  validatorCounter++;
}

numbers = confirm(
  "Any numbers?"
);
if (numbers) {
  allCharacters = allCharacters.concat(numbers);
  var rand = getRandoInteg(numbers.length);
  endResult.push(numbers[rand]);
  validatorCounter++;
}

specialChar = confirm(
  "Any special characters?"
);
if (specialCharacters) {
  allCharacters = allCharacters.concat(specialCharacters);
  var rand = getRandoInteg(specialCharacters.length);
  endResult.push(specialCharacters[rand]);
  validatorCounter++;
}

if (
  lowerChar === false &&
  upperCase === false &&
  numbers === false &&
  specialChar === false
) {
  return "Please be sure to choose at least one option! \nPress the button to try again!";
}

// Final Password 
for (i = 0 + validatorCounter; i < allCharacters.length; i++) {
  var rand = getRandoInteg(allCharacters.length);
  endResult.push(allCharacters[rand]);
}

shuffle(endResult);
return endResult.join("");
}
// Function for getting a random element from an array
function shuffle(array) {
  var d = array.length, 
  a,
  n;
  while (d) {
    n = Math.floor(Math.random() * d --);
    a = array[d];
    array[d] = array[n];
    array[n] = a;
  }

  return array;
}

function getRandoInteg(max) {
  return Math.floor(Math.random()*Math.floor(max));
}
// Function to generate password with user input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);