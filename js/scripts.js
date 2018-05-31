
function tally(a, b, c, d) {
  return a + b + c + d;
}

$(function(){

  $("form#quiz").submit(function(event){
    event.preventDefault();

    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());

    var score = tally(question1, question2, question3, question4);

    if (score <= 4) {
      $("#result").text("Unfortunately, you are not anything like Guy Fieri. Eat more cheeseburgers and think about yourself for a while.");
      $("#no").show();
    } else if (score >= 5 && score <= 10) {
      $("#result").text("You're only partly slathered in BBQ sauce, keep partying, and maybe one day you'll earn a ticket to Flavortown");
      $("#maybe").show();
    } else if (score > 10) {
      $("#result").text("Wow! It's actually you! What an honor to be in your presence Mr. Fieri. I love your donkey sauce.");
      $("#yes").show();
    } else {
      $("#result").text("What have you done? Refresh the page and don't you dare do it again.");
    }

    $("#retake").show();
    $("#send").hide();


  });

  $("button#retake").click(function(){
    $("#retake").hide();
    $("#send").show();
    $("#result").empty();
    $("img").hide();

  });

});
