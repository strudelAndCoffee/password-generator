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

    var range = 0;
    var lowerCaseLetters = true;
    var upperCaseLetters = true;
    var numbers = true;
    var symbols = true;
    var criteria = [range, lowerCaseLetters, upperCaseLetters, numbers, symbols];

    let answerRange = window.prompt("How long would you like your password to be? You may select at least 8 and at most 128 characters.");
    answerRange = parseInt(answerRange);

    if (answerRange >= 8 && answerRange <= 128) {
      sessionStorage.setItem("range", answerRange);
      getLowerCase();
    } else {
      window.alert("Sorry, please input a number from 8 to 128");
      clicked();
    }

    function getLowerCase() {

      let answerLowerCase = window.confirm("Would you like your password to include lowercase letters?");
      if (!answerLowerCase) {
        lowerCaseLetters = false;
        getUpperCase();
      } else {
        getUpperCase();
      }
    }

    function getUpperCase() {

      let answerUpperCase = window.confirm("Would you like it to include uppercase letters?");
      if (!answerUpperCase) {
        upperCaseLetters = false;
        getNumbers();
      } else {
        getNumbers;
      }
    }

    function getNumbers() {

      let answerNumbers = window.confirm("Would you like it to include numbers?");
      if (!answerNumbers) {
        numbers = false;
        getSymbols();
      } else {
        getSymbols();
      }
    }

    function getSymbols() {

      let answerSymbols = window.confirm("Would you like it to include symbols?");
      if (!answerSymbols) {
        symbols = false;
        generatePassword();
      } else {
        generatePassword();
      }
    }

    function generatePassword() {
      window.alert("Your password has been created!");
      window.alert(criteria);
    }
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
