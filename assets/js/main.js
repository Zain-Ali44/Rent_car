// client_slider
$('.inner_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite:false,
    nextArrow: '.slick-next',
    prevArrow: '.slick-prev',
    responsive: [{
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        
      }
    },
    {
       breakpoint: 400,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
  });

  // logo_img slider
$('.slick_logo_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    infinite:false,
    nextArrow: '.slick-next_logo',
    prevArrow: '.slick-prev_logo',
    responsive: [{
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        
      }
    },
    {
       breakpoint: 400,
       settings: {
          slidesToShow: 3,
          slidesToScroll: 1
       }
    }]
  });


  // COLLECTION_SDLIDER
$('.slider').slick({
  slidesToShow: 4,
  rtl: false,
  slidesToScroll: 1,
  arrows: true,
  initialSlide: 2,
  nextArrow: '.left_arrow1',
  prevArrow: '.right_arrow1',
  autoplay:false,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  focusOnSelect: true,
  touchMove: true,
  responsive: [{
    breakpoint: 990,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
     breakpoint: 400,
     settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
     }
  }]
});