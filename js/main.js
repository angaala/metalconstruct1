window.onload = function() {
let options = {
  dots: false,
  infinite: false,
  vertical: false,
  verticalSwiping: false,
  nextArrow: '<i class="myarrow fa fa-angle-right" aria-hidden="true"></i>',
  prevArrow: '<i class="myarrow fa fa-angle-left" aria-hidden="true"></i>',
  adaptiveHeight: true,
  slidesToShow: 1,
  autoplay: false,
};

let mySlide = $('.slick-vertical').slick(options);	
let slidesCount = $('.slick-slide').length/2;
if(slidesCount < 10) { slidesCount = '0' + slidesCount;}
$('.total').text(slidesCount);

};

$('.slick-vertical').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  let currentSlide_ = nextSlide + 1;
  if(currentSlide_ < 10) { currentSlide_ = '0' + currentSlide_;}
  $('.active').text(currentSlide_);
});