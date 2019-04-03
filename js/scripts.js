// Business Logic
  var translator = function(userInput){
    return false
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
