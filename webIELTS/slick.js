// jQuery(document).ready(function($) {
//       $('.slider-why').slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1.5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: true,
//         responsive: [{
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//           }
//         },
//         {
//            breakpoint: 400,
//            settings: {
//               arrows: false,
//               slidesToShow: 1,
//               slidesToScroll: 1
//            }
//         }]
//     });
// });
jQuery(document).ready(function($) {
var $carousel = $('.slider');

var settings = {
  dots: false,
  arrows: true,
  slide: '.slick-slideshow__slide',
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '34%',
  autoplay:true,
  autoplaySpeed :2000,
  infinite: true,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 1);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});
});

