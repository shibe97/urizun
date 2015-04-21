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
        if(scroll <= 1000){
            $bg01.css({ top : -400});
        } else if(1000 < scroll){
            $bg01.css({ top : 0});
        }
    });

    $('a[href^=#]').click(function() {
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

})();
