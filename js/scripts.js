// Business Logic

var vowels = ["a", "e", "i", "o", "u", "y"]

var translator = function(userInput){
  if (typeof userInput === "number") {
    return false
  }
}

//User Interface Logic
$(document).ready(function(){
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var result = translator(userInput);
    $("#answerArea").show();
    $("#translatedString").text(result);
  });
});
