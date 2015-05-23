$(function () {
    var router = new Router();
});

var Router = Backbone.Router.extend({
    initialize : function(){
        _.bindAll(this, "reset");
        Backbone.history.start();
        this.on("route", this.reset);
    },
    routes : {
        "" : "index",
        "!/" : "index",
        "!/top" : "index",
        "!/top2" : "index",
        "!/description" : "description",
        "!/story" : "story",
        "!/message" : "message",
        "!/movie" : "movie",
        "!/theater" : "theater"
    },
    reset : function(){
    },
    index : function(){
        $(".js-theater").hide();
        $(".js-index").show();
        $(".js-movie").hide();
        $('body,html').animate({scrollTop:0}, 500, 'swing');
    },
    description : function(){
        $(".js-theater").hide();
        $(".js-index").show();
        $(".js-movie").hide();
        var position = $("#Description").offset().top;
        $('body,html').animate({scrollTop:position}, 500, 'swing');
    },
    story : function(){
        $(".js-theater").hide();
        $(".js-index").show();
        $(".js-movie").hide();
        var position = $("#Story").offset().top;
        $('body,html').animate({scrollTop:position}, 500, 'swing');
    },
    message : function(){
        $(".js-theater").hide();
        $(".js-index").show();
        $(".js-movie").hide();
        var position = $("#Message").offset().top;
        $('body,html').animate({scrollTop:position}, 500, 'swing');
    },
    movie : function(){
        $(".js-index").hide();
        $(".js-theater").hide();
        $(".js-movie").show();
        $('body,html').animate({scrollTop:0}, 1, 'swing');
    },
    theater : function(){
        $(".js-index").hide();
        $(".js-theater").show();
        $(".js-movie").hide();
        $('body,html').animate({scrollTop:0}, 1, 'swing');
    }
});
