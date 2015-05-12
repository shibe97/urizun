$(function(){
    $('.js-ripple').show();
    $('.js-ripple').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });
    setInterval(function() {
        var $el = $('.js-ripple');
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 20;
        var strength = 0.04 + Math.random() * 0.04;
        $el.ripples('drop', x, y, dropRadius, strength);
    }, 800);
    setTimeout(function(){
        $('.js-ripple').addClass('ripple');
        setTimeout(function(){
            $('.js-ripple').ripples('destroy');
        }, 2000);
    }, 5000);
    $('.js-ripple').on('click', function(){
        $(this).addClass('ripple');
        setTimeout(function(){
            $('.js-ripple').ripples('destroy');
        }, 2000);
    });
});
