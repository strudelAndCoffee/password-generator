// Assignment Code
var generateBtn = document.querySelector("#generate");

// New added for function to generate password
var letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolArray = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "-",
  "`",
  ",",
  ".",
  "[",
  "{",
  "]",
  "}",
  "/",
  ":",
  ";",
  "<",
  ">",
  "?",
  "'",
];

var character = {
  lowerCase: function () {
    let x = Math.floor(Math.random() * 26);
    let letter = letterArray[x].toString();
    return letter;
  },
  upperCase: function () {
    let x = Math.floor(Math.random() * 26);
    let letter = letterArray[x].toString();
    letter = letter.toUpperCase();
    return letter;
  },
  number: function () {
    let x = Math.floor(Math.random() * 10);
    let num = numberArray[x].toString();
    return num;
  },
  symbol: function () {
    let x = Math.floor(Math.random() * 29);
    let sym = symbolArray[x].toString();
    return sym;
  },
};

function generatePassword() {
  // Prompt for password length
  var answerRange = window.prompt("How long would you like your password to be? You may select at least 8 and at most 128 characters.");
  if (answerRange === null) {
    return;
  } else {
    answerRange = parseInt(answerRange);
    if (answerRange >= 8 && answerRange <= 128) {
      sessionStorage.setItem("range", answerRange);
    } else {
      window.alert("Sorry, please input a number from 8 to 128");
      generatePassword();
    }
  }

  // Prompts for character selection
  var answerLowerCase = window.confirm("Would you like your password to include Lowercase Letters? Please click 'OK' for YES, 'Cancel' for NO");
  sessionStorage.setItem("lowerCase", answerLowerCase);

  var answerUpperCase = window.confirm("Would you like it to include Uppercase Letters?");
  sessionStorage.setItem("upperCase", answerUpperCase);

  var answerNumbers = window.confirm("Would you like it to include Numbers?");
  sessionStorage.setItem("numbers", answerNumbers);

  var answerSymbols = window.confirm("Would you like it to include Symbols?");
  sessionStorage.setItem("symbols", answerSymbols);

  var range = sessionStorage.getItem("range");
  var lettersL = sessionStorage.getItem("lowerCase").toString();
  var lettersU = sessionStorage.getItem("upperCase").toString();
  var numbers = sessionStorage.getItem("numbers").toString();
  var symbols = sessionStorage.getItem("symbols").toString();

  var passwordString = "";

  var selectCharacters = function() {

    var randomNumber = function(maxNumber) {
      let value = Math.floor(Math.random() * maxNumber);
      return value;
    }
    // shuffle function code sourced from Laurens Holst and ashleedawg through stackoverflow.com: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var shuffleArray = function(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    var charLow = [];
    var charUpp = [];
    var charNum = [];
    var charSym = [];

    var charSet = [];

    // Chooses random characters based on chosen characters
    if (lettersL === "true") {
      let i = 0;
      while (i < range) { 
        charLow.push(character.lowerCase());
        i++;
      }
      charSet.push(charLow);
    }
    if (lettersU === "true") {
      let i = 0;
      while (i < range) { 
        charUpp.push(character.upperCase());
        i++;
      }
      charSet.push(charUpp);
    }
    if (numbers === "true") {
      let i = 0;
      while (i < range) { 
        charNum.push(character.number());
        i++;
      }
      charSet.push(charNum);
    }
    if (symbols === "true") {
      let i = 0;
      while (i < range) { 
        charSym.push(character.symbol());
        i++;
      } 
      charSet.push(charSym);
    }
    // Shuffles set of chosen random characters
    var characters = [];
    for (var i = 0; i < range; i++) {
      let value = charSet[randomNumber(charSet.length)];
      characters.push(value[i].toString());
    }

    shuffleArray(characters);
    passwordString = characters.join("");
  }
  selectCharacters();
  window.alert("Your password has been created!");
  return passwordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);