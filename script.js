$( document ).ready(function() {
   $(".app .next.question-1").on("click",function(){
         $(".question").show();
         $(".title").hide();
         $("form").show();
         $(".app .next.question-2").show();
   });
   $(".app .next.question-2").on("click",function(){
      $(".app .question").text("How many more calories should a pregnant women consume?");
      $(".app .answer-a").text("300-500");
      $(".app .answer-b").text("100-300");         
      $(".app .answer-c").text("1,000-1,200");
      $(".app .answer-d").text("600-800");
      $(this).hide();
      $(".app .next.question-3").show();
   });
     $(".app .next.question-3").on("click",function(){
      $(".app .question").text("Which position should you not sleep while pregnant?");
      $(".app .answer-a").text("Back");
      $(".app .answer-b").text("Stomach");         
      $(".app .answer-c").text("Left side");
      $(".app .answer-d").text("Right side");
      $(this).hide();
      $(".app .next.question-4").show();
   });
});