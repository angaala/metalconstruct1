window.onload = function() {
let options = {
  dots: false,
  vertical: false,
  verticalSwiping: false,
  nextArrow: '<i class="myarrow fa fa-angle-right" aria-hidden="true"></i>',
  prevArrow: '<i class="myarrow fa fa-angle-left" aria-hidden="true"></i>',
  adaptiveHeight: true,
      slidesToShow: 1,


  responsive: [
  {
    breakpoint: 768,
    settings: {
  dots: false,
  vertical: false,
  verticalSwiping: false,
  nextArrow: '<i class="myarrow fa fa-angle-right" aria-hidden="true"></i>',
  prevArrow: '<i class="myarrow fa fa-angle-left" aria-hidden="true"></i>',
  adaptiveHeight: true,
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 640,
    settings: {
  dots: false,
  vertical: false,
  verticalSwiping: false,
  nextArrow: '<i class="myarrow fa fa-angle-right" aria-hidden="true"></i>',
  prevArrow: '<i class="myarrow fa fa-angle-left" aria-hidden="true"></i>',
  adaptiveHeight: true,
      slidesToShow: 1,
    }
  }
],

    autoplay: false,
};

let mySlide = $('.slick-vertical').slick(options);	
};