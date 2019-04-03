// Business Logic

var vowels = ["a", "e", "i", "o", "u", "y"]

var isNumber = function(userInputArray){
  if (userInputArray >=0 || userInputArray <=0) {
    return false;
  }
}

function isVowel (character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
  return true;
  } else {
  return false;
  }
}

console.log(isVowel("o"));

function replaceVowelsWithDash(character) {
  var finalString = '';
  for (var i = 0; i <= character.length - 1; i++) {
    if (isVowel(character.charAt(i))) {
      finalString += "-";
    } else {
      finalString += character.charAt(i);
    }
  }
	return finalString;
}
console.log(replaceVowelsWithDash("o"));

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

    var result = replaceVowelsWithDash(userInputArray);

    // var result = translator(userInputArray);
    $("#answerArea").show();
    $("#translatedString").text(result);
  });
});
