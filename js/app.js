$(function() {

    let header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(this).scrollTop();



    // header fixed
        checkScroll(scrollOffset);

    $(window).on('scroll', function(){

        scrollOffset =$(this).scrollTop();
    })

    function checkScroll(scrollOffset){

        if(scrollOffset >= introH) {
            header.addClass('fixed')
        }else {
            header.removeClass('fixed')
        }
        console.log( scrollOffset)
    }



    // Smooth scroll
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('#nav a').removeClass('active')
        $this.addClass('active');

        $(blockId)
        console.log( blockOffset)
        $('html, body').animate({
            scrollTop:blockOffset,
        },500)
    });

    // Menu nav toggle

    $('#nav_toggle').on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
    });

    // Wedo collapse

    $("[data-collapse]").on('click', function(event){
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');
        
        $this.toggleClass('active');
        $(blockId).slideToggle();
    });

    // Slider

    $("[data-slider]").slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    

}); 