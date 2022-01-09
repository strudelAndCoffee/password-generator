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

var getLowerCase = function() {
  let answerLowerCase = window.confirm("Would you like your password to include lowercase letters?");
  sessionStorage.setItem("lowerCase", answerLowerCase);
};

var getUpperCase = function() {
  let answerUpperCase = window.confirm("Would you like it to include uppercase letters?");
  sessionStorage.setItem("upperCase", answerUpperCase);
};

var getNumbers = function() {
  let answerNumbers = window.confirm("Would you like it to include numbers?");
  sessionStorage.setItem("numbers", answerNumbers);
};

var getSymbols = function() {
  let answerSymbols = window.confirm("Would you like it to include symbols?");
  sessionStorage.setItem("symbols", answerSymbols);
};

function clicked() {
  
  if (clicked) {

    let answerRange = window.prompt("How long would you like your password to be? You may select at least 8 and at most 128 characters.");
    answerRange = parseInt(answerRange);

    if (answerRange >= 8 && answerRange <= 128) {
      sessionStorage.setItem("range", answerRange);
    } else {
      window.alert("Sorry, please input a number from 8 to 128");
      clicked();
    }

    getLowerCase();
    getUpperCase();
    getNumbers();
    getSymbols();

    let range = sessionStorage.getItem("range");
    let lettersL = sessionStorage.getItem("lowerCase");
    let lettersU = sessionStorage.getItem("upperCase");
    let numbers = sessionStorage.getItem("numbers");
    let symbols = sessionStorage.getItem("symbols");

    window.alert(range);
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
