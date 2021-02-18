window.onload = function() {
let options1 = {
  dots: false,
  infinite: false,
  vertical: false,
  verticalSwiping: false,
  nextArrow: '<i class="myarrow fa fa-angle-right" aria-hidden="true"><svg width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M46.7071 7.29289C47.0976 7.68342 47.0976 8.31658 46.7071 8.70711L40.3431 15.0711C39.9526 15.4616 39.3195 15.4616 38.9289 15.0711C38.5384 14.6805 38.5384 14.0474 38.9289 13.6569L44.5858 8L38.9289 2.34315C38.5384 1.95262 38.5384 1.31946 38.9289 0.928932C39.3195 0.538408 39.9526 0.538408 40.3431 0.928932L46.7071 7.29289ZM0 7L46 7V9L0 9L0 7Z" fill="#1D479B"/></svg></i>',
  prevArrow: '<i class="myarrow fa fa-angle-left" aria-hidden="true"><svg width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM47 7L1 7V9L47 9V7Z" fill="#D2D2D2"/></svg></i>',
  adaptiveHeight: true,
  slidesToShow: 3,
  autoplay: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

let mySlide1 = $('#slider01').slick(options1);	
let slidesCount = $('#slider01 .slick-slide').length/2;
if(slidesCount < 10) { slidesCount = '0' + slidesCount;}
$('.works .total').text(slidesCount);




let options2 = {
  dots: false,
  infinite: false,
  vertical: false,
  verticalSwiping: false,
  nextArrow: '<i class="myarrow fa fa-angle-right fa-angle-right2" aria-hidden="true"><svg width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M46.7071 7.29289C47.0976 7.68342 47.0976 8.31658 46.7071 8.70711L40.3431 15.0711C39.9526 15.4616 39.3195 15.4616 38.9289 15.0711C38.5384 14.6805 38.5384 14.0474 38.9289 13.6569L44.5858 8L38.9289 2.34315C38.5384 1.95262 38.5384 1.31946 38.9289 0.928932C39.3195 0.538408 39.9526 0.538408 40.3431 0.928932L46.7071 7.29289ZM0 7L46 7V9L0 9L0 7Z" fill="#1D479B"/></svg></i>',
  prevArrow: '<i class="myarrow fa fa-angle-left fa-angle-left2" aria-hidden="true"><svg width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM47 7L1 7V9L47 9V7Z" fill="#D2D2D2"/></svg></i>',
  adaptiveHeight: true,
  slidesToShow: 4,
  autoplay: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

let mySlide2 = $('#slider02').slick(options2);	
let slidesCount2 = $('#slider02 .slick-slide').length/2;
if(slidesCount2 < 10) { slidesCount2 = '0' + slidesCount2;}
$('.quality .total').text(slidesCount2);

};

$('#slider01').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  let currentSlide_ = nextSlide + 1;
  let slidesCount = $('#slider01 .slick-slide').length/2;
  if(currentSlide_ == (slidesCount - 2)) {$('#slider01 .fa-angle-right').addClass('fa-angle-right_');} else {$('#slider01 .fa-angle-right').removeClass('fa-angle-right_');}
  if(currentSlide_ != 1) {$('#slider01 .fa-angle-left').addClass('fa-angle-left_');} else {$('#slider01 .fa-angle-left').removeClass('fa-angle-left_');}
  if(slidesCount < 10) { slidesCount = '0' + slidesCount;}
  if(currentSlide_ < 10) { currentSlide_ = '0' + currentSlide_;}
  $('.works .active').text(currentSlide_);
});

$('#slider02').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  let currentSlide_ = nextSlide + 1;
  let slidesCount = $('#slider02 .slick-slide').length/2; console.log(currentSlide_ + '_' + slidesCount);
  if(currentSlide_ == (slidesCount - 3)) {$('#slider02 .fa-angle-right').addClass('fa-angle-right_');} else {$('#slider02 .fa-angle-right').removeClass('fa-angle-right_');}
  if(currentSlide_ != 1) {$('#slider02 .fa-angle-left').addClass('fa-angle-left_');} else {$('#slider02 .fa-angle-left').removeClass('fa-angle-left_');}
  if(slidesCount < 10) { slidesCount = '0' + slidesCount;}
  if(currentSlide_ < 10) { currentSlide_ = '0' + currentSlide_;}
  $('.quality .active').text(currentSlide_);
});

$(function(){
  $("a[href^='#']:not(a[href^='#openModal'], a[href^='#close'])").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
  });
});

$(document).ready(function() {
$("#phone").mask("+7 (999) 99-99-999");
$("#phone1").mask("+7 (999) 99-99-999");
});


document.addEventListener("DOMContentLoaded", function () {
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});

$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $(".modal-content"); // тут указываем ID элемента
  if (!div.is(e.target) && ($(".modal").css('opacity')=='1') // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".modal").css('opacity', '0'); // скрываем его
        $(".modal").css('pointer-events', 'none');
        $(".modal").css('overflow-y', '');
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
  }
});

$(function(){
  $("a[href^='#openModal']").click(function(){
    $(".modal").css('opacity', '1');
    $(".modal").css('pointer-events', 'auto');
    $(".modal").css('overflow-y', 'auto');
          return false;
  });
});

$(function(){
  $(".close").click(function(){
    $(".modal").css('opacity', '0');
    $(".modal").css('pointer-events', 'none');
        $(".modal").css('overflow-y', '');
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
          return false;
  });
});