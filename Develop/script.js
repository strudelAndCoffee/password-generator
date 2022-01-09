// Assignment Code
//var generateBtn = document.querySelector("#generate");

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

document.getElementById("generate").onclick = clicked;

function generatePassword() {
  let answerRange = window.prompt(
    "How long would you like your password to be? You may select at least 8 and at most 128 characters."
  );
  answerRange = parseInt(answerRange);

  if (answerRange >= 8 && answerRange <= 128) {
    sessionStorage.setItem("range", answerRange);
  } else {
    window.alert("Sorry, please input a number from 8 to 128");
    generatePassword();
  }

  let answerLowerCase = window.confirm(
    "Would you like your password to include lowercase letters?"
  );
  sessionStorage.setItem("lowerCase", answerLowerCase);

  let answerUpperCase = window.confirm(
    "Would you like it to include uppercase letters?"
  );
  sessionStorage.setItem("upperCase", answerUpperCase);

  let answerNumbers = window.confirm("Would you like it to include numbers?");
  sessionStorage.setItem("numbers", answerNumbers);

  let answerSymbols = window.confirm("Would you like it to include symbols?");
  sessionStorage.setItem("symbols", answerSymbols);

  let range = sessionStorage.getItem("range");
  let lettersL = sessionStorage.getItem("lowerCase").toString();
  let lettersU = sessionStorage.getItem("upperCase").toString();
  let numbers = sessionStorage.getItem("numbers").toString();
  let symbols = sessionStorage.getItem("symbols").toString();

  let charLow = [];
  let charUpp = [];
  let charNum = [];
  let charSym = [];

  let charSet = [];

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

  var password = function() {

    let randomNumber = function(maxNumber) {
      let value = Math.floor(Math.random() * maxNumber);
      return value;
    }

    // shuffle function code sourced from Laurens Holst and ashleedawg through stackoverflow.com: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let shuffleArray = function(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    let characters = [];

    for (var i = 0; i < range; i++) {
      let value = charSet[randomNumber(charSet.length)];
      characters.push(value[i].toString());
    }

    shuffleArray(characters);

    console.log(characters);
  }

  password();
}

function clicked() {
  if (clicked) {
    generatePassword();
  }
}

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
