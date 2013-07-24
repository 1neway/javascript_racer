

$(document).ready(function () {
  
  var count = 0;
  var startTime = null;

  var keyupFunction  = function(event){
    
    count++;
    if (count === 1) {
      startTime = new Date().getTime();
    }

    
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
         $(document).off("keyup", keyupFunction);
            var endTime = new Date().getTime();
            var totalTime = parseFloat((endTime - startTime)/1000);
            var winner = activeLocation.parent().data('name');
         $("#winner").html("Winner " + activeLocation.parent().data('name') + ", Time: " + totalTime + " seconds");
         $("#url").html("Here is a semi-permanent record of your achievement: ");

       $.post("/winner", {stats: {winner: winner, time: totalTime}});
    };

       
    $('form').on('submit', function(event) {
         location.reload(); 
    });

    // $('#signup input').on("keyup", function(event) {
    //   event.();
    // })

  };   

  $(document).on("keyup", keyupFunction);  

  // $("#signup").submit(player, function(event) {
  //   event.preventDefault();
  //   console.log(event);

  });
// });
