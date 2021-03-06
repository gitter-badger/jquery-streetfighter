var isPlayingTooCool = false;

$(document).ready(function(){
    $('.main').mouseenter(function(){
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
        $('.explanation').hide();
        $('.whoa').show();
    })
    .mouseup(function(){
        $('.ryu-ready').show();
        $('.ryu-throwing').hide();
        $('.hadouken').hide();
        $('.explanation').show();
        $('.whoa').hide();
    });
    $('#main').finish().keydown(function(letter){
        if (letter.which==88){
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').show();
            if(!isPlayingTooCool) {
                isPlayingTooCool = true;
                playTooCool();
            }
            }
    });
    $('#main').finish().keyup(function(letter) {
         if (letter.which==88){
            $('.ryu-ready').show();
            $('.ryu-cool').hide();}
            isPlayingTooCool = false;
            $('#tooCool')[0].pause();
    });
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 1;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playTooCool () {
  $('#tooCool')[0].volume = 1;
  $('#tooCool')[0].load();
  $('#tooCool')[0].play();
}