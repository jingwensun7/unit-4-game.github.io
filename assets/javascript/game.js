$(document).ready(function() {

var losses = 0;
    $("#losses").html("0");
var wins = 0;
    $("#wins").html("0");
var counter = 0;
    $("#user-number").html("0");
var computerNumber = Math.floor(Math.random() * 102) + 19;
    $("#computer-number").text(computerNumber);


var reset = function() {
    $(".crystals").empty();
    var images = [
    'assets/images/2.jpeg',
    'assets/images/3.jpeg',
    'assets/images/4.jpeg',
    'assets/images/5.jpeg'
    ];
  counter = 0;
  computerNumber = Math.floor(Math.random() * 102) + 19;
    $("#computer-number").text(computerNumber);
    console.log(computerNumber);

  for (var i = 0; i < 4; i++) {
    var userNumber = Math.floor(Math.random() * 12) + 1;
    console.log(userNumber);

    var crystal = $("<div>");
        crystal.attr ({
            "class" : 'crystal',
            "data" : userNumber
         });
         crystal.css ({
            "background-image" : "url('" + images[i] + "')",
            "background-size" : "cover"
         });
    $(".crystals").append(crystal);
  }
    $("#user-number").html(counter);
}

reset();

$(document).on("click", '.crystal', function() {

    var crystalValue = ($(this).attr("data"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#user-number").html(counter);

    if (counter > computerNumber) {
        losses++;
        $("#win-lose").html("<b>You lose!</b>");
        $("#losses").html(losses);
        reset();
    }
    else if (counter === computerNumber) {
        wins++;
        $("#win-lose").html("<b>You win!</b>");
        $("#wins").html(wins);
        reset();
    }
});

});