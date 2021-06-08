$(function(){
    
    $('.header_slider').slick({
    arrows: false,
    dots: true
    });
    
    $('.rewiews_slider').slick({
        arrows: true,
        dots: false,
        centerMode: true,
        slidesToShow: 1
        
    });
        $('.menu_btn').on('click', function(){
            $('.menu_list').toggleClass('menu_list--active');
        });

        // $('.courses_inner-slider').slick({
        //     arrows: false,
        //     dots: true
        //     });

});

