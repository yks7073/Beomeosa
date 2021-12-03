$(document).ready(function () {
    $(".open").on("click", function () {

        $("nav").stop().animate({
            "right": 0
        });
    })
    $(".close").on("click", function () {
        $("nav").stop().animate({
            "right": "-80%"
        })
    });

    var slickOpt = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    function setSlick() {
        var winWidth = $(window).width();

        if(winWidth >= 1261) {
            $(".slick-initailized").slick("unslick");
            $(".ad .wrap").slick(slickOpt)
        } else {
            $(".main").slick(slickOpt)
            $(".madang .wrap").slick(slickOpt)
            $(".ad .wrap").slick(slickOpt)

           
        }};
        

    $(window).on("resize", function() {
        setSlick();
    })

    setSlick();


 

    $(".open").on("click", function () {

        $("nav").fadeIn({

        });
    })
    $(".close").on("click", function () {
        $("nav").fadeOut({

        })
    });


});