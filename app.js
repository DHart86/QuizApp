$(document).ready(function() {
var currentQ = 0;
var correctAnswers = 0;
var questions = [{
  question: ""
}, {
  question: "2 + 2",
  choices: [4, 3, 1],
  answer: 1,
  exp: "I can have my neice help if you'd like"
}, {
  question: "3 * 2",
  choices: [5, 6, 2],
  answer: 2,
  exp: "That's what a good try would look like if it was bad"
}, {
  question: "4 + 4",
  choices: [4, 3, 8],
  answer: 3,
  exp: "It's ok - use your fingers"
}, {
  question: "8 * 2",
  choices: [16, 3, 1],
  answer: 1,
  exp: "It's the same as 8 + 8"
}, {
  question: "10 + 10",
  choices: [4, 3, 20],
  answer: 3,
  exp: "The others weren't even double digit..."
}, {
  "question": "End of Quiz!",
  "choices": ""
}];

$('button').on("mousedown touchstart", function() {
  $('i').toggleClass('glow').css("opacity","1");
  
})
$('button').on("mouseup", function() {
  $('i').removeClass('glow').css("opacity","0.8");
})

$("button").on("click", function() {
  currentQ++;
  $(this).text("Next");
  if ($('input[name="quest1"]:checked').val() == questions[currentQ - 1].answer && currentQ >= 2) {
    correctAnswers++;
  } else if (currentQ >= 2) {
    alert(questions[currentQ - 1].exp);
  }
});

$('button').on("click", $(".radio"), function() {
  if (currentQ < 7) {
    event.preventDefault();
    $(".questAn").empty();

    $(".questAn").append('<h3>' + questions[currentQ].question + ' ?</h3><hr>');
    if (currentQ < 7) {
      $(".questAn").append('<input type="radio" class="radio" value="1" name = "quest1" checked id="ans1"><label for="ans1">' + questions[currentQ].choices[0] + '</label></input><br>');
      $(".questAn").append('<input type="radio" class="radio" value="2" name = "quest1" id="ans2"><label for="ans2">' + questions[currentQ].choices[1] + '</label></input><br>');
      $(".questAn").append('<input type="radio" class="radio" value="3" name = "quest1" id="ans3"><label for="ans3">' + questions[currentQ].choices[2] + '</label></input><br>');

      $(".dispScore").text(correctAnswers + " correct, " + (currentQ - 1 - correctAnswers) + " incorrect");
      $(".dispQuestion").text("Question " + currentQ + " of 5");
    }

    if (currentQ == 6) {
      $(".questAn").empty();
      $(".dispQuestion").text("Question 5 of 5");
      $("button").text("Reset");
      $(".dispQuestion").addClass("hidden");
      if (correctAnswers * 20 == 100) {
        $(".dispScore").text("You scored " + correctAnswers * 20 + " % right - Great Job!");
      } else $(".dispScore").text("You scored " + correctAnswers * 20 + " % right!");
    }
  }

});
});