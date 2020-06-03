$("#down").click(function(){
  $(".main-part").css("display", "block");
  $(".about").css("display", "block");
  $(".final-pt").css("display", "block");
});

$(function() {
    $(window).scroll( function(){


        $('.fadein').each( function(i){

            var bottom_of_object = $('.about').position().top + $('.about').outerHeight()/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            bottom_of_window = bottom_of_window + 200;  

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1000);

            }
        }); 

    });
});

$(function() {
    $(window).scroll( function(){


        $('.board').each( function(i){

            var bottom_of_object = $('.about').position().top + $('.about').outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            bottom_of_window = bottom_of_window + 1000;  

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1000);

            }
        }); 

    });
});


(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".start");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();

$("#down").click(function() {
    $('html,body').animate({
        scrollTop: $("#tgt").offset().top},
        'slow');
});