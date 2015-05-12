$(function(){
    var $el = $('.js-ripple');
    $el.ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });
    setInterval(function() {
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 20;
        var strength = 0.04 + Math.random() * 0.04;
        $el.ripples('drop', x, y, dropRadius, strength);
    }, 800);
    setTimeout(function(){
        $el.addClass('ripple');
        setTimeout(function(){
            $el.ripples('destroy');
            $el.hide();
        }, 2000);
    }, 5000);
    $el.on('click', function(){
        $el.addClass('ripple');
        setTimeout(function(){
            $el.ripples('destroy');
            $el.hide();
        }, 2000);
    });
});
