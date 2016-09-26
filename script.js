$(document).ready(function(){
  $(".book-button").click(function(){
    $('.email-input').focus();
    $('html, body').animate({
        scrollTop: $('.email-input').offset().top
    }, 2000);
  });
});
