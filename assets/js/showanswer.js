
$(".show-mcq-answer").click (function(){
    // Close all open windows
    $(".mcq-answer").stop().slideUp(300); 
    // Toggle this window open/close
    $(this).next(".mcq-answer").stop().slideToggle(300);
  });