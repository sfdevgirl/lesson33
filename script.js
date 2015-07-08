$( document ).ready(function() {
   //quiz array
   var quiz = [ {
      question: "The avarage pregnancy is __ weeks.",
      choices: ["35", "37", "42", "40"],
      correct: 3
   },
   {
      question: "How many more calories should a pregnant women consume?",
      choices: ["300-500", "100-300", "1,000-1,200","600-800" ],
      correct: 1
   },
   {
      question: "Which position should you not sleep while pregnant?",
      choices: ["Back", "Stomach", "Left side", "Right side"],
      correct: 0
   },
   {
      question: "What foods should you avoid while pregnant?",
      choices: ["Local", "Organic", "Raw", "All of the above"]
      correct: 2
   }];
   // functions
   $(".app .next.question-1").on("click",function(){
         $(".question").show();
         $(".app .question").text(quiz[0].question);
         $(".title").hide();
         $("form").show();
         $(".app .answer-a").text(quiz[0].choices[0]);
         $(".app .answer-b").text(quiz[0].choices[1]);         
         $(".app .answer-c").text(quiz[0].choices[2]);
         $(".app .answer-d").text(quiz[0].choices[3]);
         $(".app .next.question-2").show();
   });
   $(".app .next.question-2").on("click",function(){
      $(".app .question").text(quiz[1].question);
      $(".app .answer-a").text(quiz[1].choices[0]);
      $(".app .answer-b").text(quiz[1].choices[1]);         
      $(".app .answer-c").text(quiz[1].choices[2]);
      $(".app .answer-d").text(quiz[1].choices[3]);
      $(this).hide();
      $(".app .next.question-3").show();
   });
     $(".app .next.question-3").on("click",function(){
      $(".app .question").text(quiz[2].question);
      $(".app .answer-a").text(quiz[2].choices[0]);
      $(".app .answer-b").text(quiz[2].choices[1]);         
      $(".app .answer-c").text(quiz[2].choices[2]);
      $(".app .answer-d").text(quiz[2].choices[3]);
      $(this).hide();
      $(".app .next.question-4").show();
   });
       $(".app .next.question-4").on("click",function(){
      $(".app .question").text(quiz[3].question);
      $(".app .answer-a").text(quiz[3].choices[0]);
      $(".app .answer-b").text(quiz[3].choices[1]);         
      $(".app .answer-c").text(quiz[3].choices[2]);
      $(".app .answer-d").text(quiz[3].choices[3]);
      $(this).hide();
      $(".app .next.finish").show();
   }); 
});