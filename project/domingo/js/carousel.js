$(function () {
  const $owl = $('.preview_btm_box_wrap');
  $owl.owlCarousel({
    margin: 16,
    loop: true,
    dots: false,
    nav: false,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>"
    ],
    responsive: {
      0:    { items: 1 },
      600:  { items: 2 },
      1024: { items: 2 },
      1280: { items: 3
       } 
    }
  });
});

$(document).ready(function () {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        loop: true,
        dots: false,
        responsive: {
            0: { items: 3.5 }
        }
    })

});