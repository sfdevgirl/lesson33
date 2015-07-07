 var quiz = {
   one: "The avarage pregnancy is __ weeks.",
   two: "How many more calories should a pregnant women consume?",
   three: "Which position should you not sleep while pregnant?",
   four: "What foods should you avoid while pregnant?"
};
var answerOne = ["35", "37", "40", "42"];
var answerTwo = ["300-500", "100-300", "1,000-1,200","600-800" ];
var answerThree = ["Back", "Stomach", "Left side", "Right side"];
var answerFour = ["Raw", "Organic", "Local", "All of the above"];    

$( document ).ready(function() {
   $(".app .next.question-1").on("click",function(){
         $(".question").show();
         $(".app .question").text(quiz.one);
         $(".title").hide();
         $("form").show();
         $(".app .answer-a").text(answerOne[0]);
         $(".app .answer-b").text(answerOne[1]);         
         $(".app .answer-c").text(answerOne[2]);
         $(".app .answer-d").text(answerOne[3]);
         $(".app .next.question-2").show();
   });
   $(".app .next.question-2").on("click",function(){
      $(".app .question").text(quiz.two);
      $(".app .answer-a").text(answerTwo[0]);
      $(".app .answer-b").text(answerTwo[1]);         
      $(".app .answer-c").text(answerTwo[2]);
      $(".app .answer-d").text(answerTwo[3]);
      $(this).hide();
      $(".app .next.question-3").show();
   });
     $(".app .next.question-3").on("click",function(){
      $(".app .question").text(quiz.three);
      $(".app .answer-a").text(answerThree[0]);
      $(".app .answer-b").text(answerThree[1]);         
      $(".app .answer-c").text(answerThree[2]);
      $(".app .answer-d").text(answerThree[3]);
      $(this).hide();
      $(".app .next.question-4").show();
   });
       $(".app .next.question-4").on("click",function(){
      $(".app .question").text(quiz.four);
      $(".app .answer-a").text(answerFour[0]);
      $(".app .answer-b").text(answerFour[1]);         
      $(".app .answer-c").text(answerFour[2]);
      $(".app .answer-d").text(answerFour[3]);
      $(this).hide();
      $(".app .next.finish").show();
   });
     


});