// Business Logic

var vowels = ["a", "e", "i", "o", "u", "y"]

var isNumber = function(userInputArray){
  if (userInputArray >=0 || userInputArray <=0) {
    return false;
  }
}

function isVowel (character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'y') {
  return true;
  } else {
  return false;
  }
}

console.log(isVowel("o"));

function firstCharVowelAddAy(string) {
  if (string.charAt(0) === "y") {
    var firstChar = string.charAt(0);
    var newString = string.slice(1);
    newString = newString + firstChar + "ay";

  } else if (isVowel(string.charAt(0))) {
    var newString = string.concat("ay");

  } else {
  }
  return newString;
}
console.log(firstCharVowelAddAy("open"));

function firstCharConsonant(string) {
  if (isVowel(string.charAt(0)) === false) {
    var firstChar = string.charAt(0);
    var newString = string.slice(1);
    newString = newString + firstChar + "ay";
  } else {
  }
  return newString;
}
console.log(firstCharConsonant("top"));


//User Interface Logic
$(document).ready(function(){
  $("form#inputForm").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();
    var userInputSplitString = userInput.split(" ");
    console.log(userInput);
    console.log(userInputSplitString);
    var userInputArray = [];
    userInputArray.push(userInputSplitString);
    console.log(userInputArray);

    var result = firstCharVowelAddAy(userInputArray);

    // var result = translator(userInputArray);
    $("#answerArea").show();
    $("#translatedString").text(result);
  });
});
