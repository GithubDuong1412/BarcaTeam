$(document).ready(function(){
    var num = 0;
    var lastBanner = $("img.silder-animation:last").attr("idx");

    $("#next").click(function(){
        if(++num > lastBanner) {
            num = 0;
        }
        $("img.silder-animation").hide();
        $("img.silder-animation").eq(num).show();
    })

    $("#prev").click(function(){
        if(--num < 0) {
            num = lastBanner;
        }
        $("img.silder-animation").hide();
        $("img.silder-animation").eq(num).show();
    })

    var interval;
    var timer = function(){
        interval = setInterval(function(){
            $("#next").click();
        }, 3000);
    };

    timer();
})