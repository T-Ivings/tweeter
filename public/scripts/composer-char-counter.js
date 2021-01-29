//function runs the counter on page
$(document).ready(function() {
  $("#tweet-text").keyup(function() {
    $(this).siblings().children('.counter').text(140 - this.value.length);
    if (this.value.length > 140) {
      $(this).siblings().children('.counter').addClass("red");
    } else {
        $(this).siblings().children('.counter').removeClass("red");
    }
  });
});