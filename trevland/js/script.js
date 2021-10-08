$(function() {
    $('.menu_btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
});
$(function(){
    $('.offers__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        
        responsive: [
            {
              breakpoint: 1107,
              settings: {
                slidesToShow: 4,
              }
            },
              {
                breakpoint: 566,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  centerMode: true,
                  swipe: true,
                }
              },
              {
                breakpoint: 460,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,  
                }
              },
              {
                breakpoint: 425,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  variableWidth: false,
                  
                }
              },
        ]
    });

  });
  


  
