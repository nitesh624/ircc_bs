(function($){
    $(window).on("load",function(){
        $(".field-expertise-faculty ul").mCustomScrollbar({
            theme: "dark-thick",
            setHeight: "300px",
            scrollbarPosition: "inside",
            scrollInertia: 600,
            scrollButtons: { 
                enable: true 
            }
        });
    });
})(jQuery);