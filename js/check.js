$(document).ready(function(){
    $('.flex-block').click(function() {
       $(this).toggle(1000);      
    }); 
    $('.box').mousedown(function(eventObject) {
        $(this).css({
            color: '#acd37e'
        });  
    });
    $(".flex-block:last").click(function() {
                       if ($(".flex-block").is(":hidden")) {
                            $('.course').hide('slow', function() {
                                $('.content').show('slow', function() {
                                $(this).css("background", "url:('gplaypattern.png')");
                            });            
                        });

                       } else {
                           
                            $(".content").hide("slow");

                       }
 return false;
});
    
    
    $('input[type=checkbox]').css({'opacity': 0});
    $('input[type=checkbox]').css({'opacity': 0}).wrap('<span class="checkbox"></span>');
    $('.checkbox').click(function() {
    $(this).toggleClass('active'); 
    })
});