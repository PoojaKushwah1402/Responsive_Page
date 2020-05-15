
window.addEventListener("click",function(){
    event.preventDefault();
})

$(document).ready(function () {
 
$("video").attr('controls',true);    
    
$(".vido").click(function(){
    playPause(this);
    
});


function playPause(current) { 
    if (current.paused) {
        current.play();
        $(current).prevAll().hide();
        $(current).attr('controls',true);
        }
    else  {
        current.pause(); 
        $(current).prevAll().show();
        $(current).attr('controls',false);
        }
}

$('div.foot').click(function (){
    $('html, body').animate({
      scrollTop: $("div.up").offset().top
    }, 1000)
  })


});