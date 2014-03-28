$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function(){
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
        .animate(
            {'left': '1109px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '509px');
            });
    })
    .mouseup(function(){
        //hadouken sound off
        $('.ryu-ready').show();
        $('.ryu-throwing').hide();
        $('.hadouken').hide();
    });
   /* .keydown("x",function(){
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
    })
    .keyup("x",function(){
        $('.ryu-ready').show();
        $('.ryu-cool').hide();
    });*/
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 1;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}