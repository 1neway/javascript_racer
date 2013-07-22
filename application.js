$(document).ready(function () {
  
  $(document).on("keyup", function(event) {
    if(event.keyCode === 65) {
      var activeLocation = $("#Player1 td.active");
      var position = $('.active').index(activeLocation) + 1;      
      $(activeLocation).removeClass("active").next().addClass('active');       
    };

    if(event.keyCode === 76) {
      var activeLocation = $("#Player2 td.active");
      var position = $('.active').index(activeLocation) + 1;      
      $(activeLocation).removeClass("active").next().addClass('active'); 

    };
    
    if ($(activeLocation).siblings(':last').hasClass('active')){
      // alert ("Winner:" + activeLocation.parent().attr('id'));
      $("#winner").html("Winner " + activeLocation.parent().attr('id'));

    $('form').on('submit'), function(event) {
      location.reload(); 

      };
    }; 

  });     


});
