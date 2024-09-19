$(function(){
// Venu Box
$(document).ready(function(){
  $('.venobox').venobox(); 
});
// wow js
  // banner
  $('.review_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    dots: false,
    prevArrow: '<i class="fas fa-chevron-left prev_rev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next_rev"></i>',
    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.stuf_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2500,
    speed: 800,
    dots: false,
    prevArrow: '<i class="fas fa-chevron-left prev_rev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next_rev"></i>',
    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

new WOW().init();

// banner
$('.banner').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  arrows:true,
  cssEase: 'linear',
  fade:true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 800,
  dots:false,
  prevArrow:'<i class="fas fa-chevron-left prev"></i>', 
  nextArrow:'<i class="fas fa-chevron-right next"></i>',
});
// header New Class
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.nav').addClass('navNewClass');
  } else {
     $('.nav').removeClass('navNewClass');
  }
});

   // Back to Top 
   var btn = $('.backtotop');
   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
 


// Ofcan Side bar dropper
var list1 = $('.js-dropdown-list1');
var link1 = $('.js-link1');
link1.click(function(e) {
  e.preventDefault();
  list1.slideToggle(200);
}); 
// light Shot
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})
     // countup
     $('.counterr').countUp();

});


