// Assignment Code
//var generateBtn = document.querySelector("#generate");

var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "`", ",", ".", "[", "{", "]", "}", "/", ":", ";", "<", ">", "?", "'"];

var lowerCase = function() {
  let x = Math.floor(Math.random() * 26);
  let letter = letterArray[x].toString();
  return letter;
};

var upperCase = function() {
  let x = Math.floor(Math.random() * 26);
  let letter = letterArray[x].toString();
  letter = letter.toUpperCase();
  return letter;
};

var number = function() {
  let x = Math.floor(Math.random() * 10);
  let num = numberArray[x].toString();
  return num;
};

var symbol = function() {
  let x = Math.floor(Math.random() * 29);
  let sym = symbolArray[x].toString();
  return sym;
};






document.getElementById("generate").onclick = clicked;

function clicked() {
  if (clicked) {
    random();
  }
};

// Write password to the #password input
//function writePassword() {
//
//  var generatePassword = function() {
//    let randomNum = Math.floor(Math.random() * 26) + 1;
//  }
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");
//  passwordText.value = password;
//
//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
