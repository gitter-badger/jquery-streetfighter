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
        $('.ryu-ready').show();
        $('.ryu-throwing').hide();
        $('.hadouken').hide();
    });
    $('#main').finish().keydown(function(letter){
        if (letter.which==88){
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
            }
    });
    $('#main').finish().keyup(function(letter) {
         if (letter.which==88){
            $('.ryu-ready').show();
            $('.ryu-cool').hide();}
    });
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 1;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}