$(document).ready(function(){

    $("#gallery article a div").on("mouseover",function(){
        $(this).children().fadeIn(100);
    });
    $("#gallery article a div").on("mouseleave",function(){
        $(this).children().fadeOut(100);
    });
    
    $("#menu").on("click",function(){
        $('#deployedmenu').toggle("blind",{direction : "up"});
    })

    $("#deployedmenu span").on("click",function(){
        $('#deployedmenu').toggle("blind",{direction : "up"});
    });
    
    $("#schoolbutton").on("click",function(){
        $(".personal").css("display","none");
        $(".internship").css("display","none");
        $(".school").fadeIn(100);
    });

    $("#personalbutton").on("click",function(){
        $(".personal").fadeIn(100);
        $(".internship").css("display","none");
        $(".school").css("display","none");
    });

    $("#internshipbutton").on("click",function(){
        $(".personal").css("display","none");
        $(".internship").fadeIn(100);
        $(".school").css("display","none");
    });

    $("#allbutton").on("click",function(){
        $(".personal").fadeIn(100);
        $(".internship").fadeIn(100);
        $(".school").fadeIn(100);
    });
    
});

