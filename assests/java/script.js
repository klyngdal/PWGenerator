// assignment code
let generateBTN = document.querySelector("#generate");

//ARRAYS FOR USER PROMTS
let lowercaseArr = [
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
let upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacterArr = ["!", "@", "#", "$", "%", "^", "&"];
let allCharArr = [];

//write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}

function generatePassword() {
  let passwordLength = parseInt(prompt("Please enter a length between 8-128 characters"));
  console.log(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a different password length");
    generatePassword();
  }
  // after length is validated
  else {
    let lowerCase = confirm("Do you want to include LOWERCASE characters in your password?");
    let upperCase = confirm("Do you want to include UPPERCASE characters in your password?");
    let number = confirm("Do you want to include NUMBER characters in your password?");
    let specialCharacter = confirm("Do you want to include SPECIAL characters in your password?");
    //another condition when all are false -> need to have at least one condition
    let finalPassword = [];

    if (lowerCase) {
      //push lowercaseArr into allCharArr
      Array.prototype.push.apply(allCharArr, lowercaseArr);
      finalPassword.push(lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)]);
    }
    if (upperCase) {
      //push lowercaseArr into allCharArr
      Array.prototype.push.apply(allCharArr, upperCaseArr);
      finalPassword.push(upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]);
    }
    if (number) {
      //push lowercaseArr into allCharArr
      Array.prototype.push.apply(allCharArr, numArr);
      finalPassword.push(numArr[Math.floor(Math.random() * numArr.length)]);
    }
    if (specialCharacter) {
      //push lowercaseArr into allCharArr
      Array.prototype.push.apply(allCharArr, specialCharacterArr);
      finalPassword.push(specialCharacterArr[Math.floor(Math.random() * specialCharacterArr.length)]);
    }

    // all criterias = false
    if (!lowerCase && !upperCase && !number && !specialCharacter) {
      alert("Can't make a password with nothing in it!");
    }
    while (finalPassword.length < passwordLength) {
      finalPassword.push(allCharArr[Math.floor(Math.random() * allCharArr.length)]);
    }

    finalPassword = shuffle(finalPassword);
    return finalPassword.join("");
  }
}
// I got this fuction from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// even listener to generate button
//generateBTN.addEventListener("click", writePassword);
generateBTN.addEventListener("click", writePassword);
