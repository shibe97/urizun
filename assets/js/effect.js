(function(){
    var scroll = 0;
    var clientX = -500;
    var clientY = -500;
    var pageY = 0;
    var windowX = $(window).width();
    var threshold01 = 800;

    var $bg01 = $(".js-bg");

    $(window).scroll(function(e){
        e.preventDefault();
        scroll = $(this).scrollTop();
        if(scroll <= 0){
            $(".Header").removeClass("scroll");
        } else {
            $(".Header").addClass("scroll");
        }
        if(scroll <= 1000){
            $bg01.css({ top : -400});
        } else if(1000 < scroll){
            $bg01.css({ top : 0});
        }
    });
    
    $(".js-top").on("click", function(){
        var position = $("#Top").offset().top;
        $('body,html').animate({scrollTop:position}, 1000, 'swing');
    });
    $(".js-top2").on("click", function(){
        var position = $("#Top2").offset().top;
        $('body,html').animate({scrollTop:position}, 1000, 'swing');
    });
    
    $(".js-menu").on("click", function(){
        if($(this).hasClass("open")){
            $(this).removeClass("open");
        } else {
            $(this).addClass("open");
        }
        $(".js-nav").toggle();
    });

    $(".js-nav li a").on("click", function(){
        $(".js-menu").removeClass("open");
        $(this).closest(".js-nav").hide();
    });

})();
