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
        "!/movie" : "movie",
        "!/theater" : "theater"
    },
    reset : function(){
    },
    index : function(){
        $(".js-theater").hide();
        $(".js-index").show();
        $(".js-movie").hide();
    },
    movie : function(){
        $(".js-index").hide();
        $(".js-theater").hide();
        $(".js-movie").show();
    },
    theater : function(){
        $(".js-index").hide();
        $(".js-theater").show();
        $(".js-movie").hide();
    }
});
