$(function(){
    
    $('.header_slider').slick({
    arrows: false,
    dots: true
    });
    
    $('.rewiews_slider').slick({
        arrows: true,
        dots: false,
        centerMode: true,
        slidesToShow: 1,
        nextArrow: '<img src="../img/arrright.png" alt="" class="next">',
        prevArrow: '<img src="../img/arrleft.png" alt="" class="prev">',
    });
        $('.menu_btn').on('click', function(){
            $('.menu_list').toggleClass('menu_list--active');
        });

        // $('.courses_inner-slider').slick({
        //     arrows: false,
        //     dots: true
        //     });

});

