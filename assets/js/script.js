$(function () {
  "use strict"

  // PRELOADER START
  $(window).on('load', function () {
    $('.Preloader').delay(1000).fadeOut(500);
  });

  // Menu js start
  $(window).on('scroll', function () {
    var styke = $(this).scrollTop();
    if (styke > 200) {
      $("#Menu_Part").addClass("Menu_Fixed");
    } else {
      $("#Menu_Part").removeClass("Menu_Fixed");
    }
  });

  //  SIDE MENU START
  $('.Mobile_Icon').on('click', function () {
    $('.Mobile_Menu').toggleClass('Side_Menu');
  });

  // SMOOTH SCROLLING START
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 60
          }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            };
          });
        }
      }
    });

  // typed js start
  var typed = new Typed('#typed', {
    stringsElement: '#typed_strings'
  });

  // COUNTER UP JS START
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // PROGRESS BAR JS START
  window.onload = function () {
    win.loopFun($('.Web_Dis')[0], 90, '#ccc', '#f68338', '#1d3548', '24px', 20, 70, 1000, 'back-out');
    win.loopFun($('.Web_Dev')[0], 70, '#ccc', '#f68338', '#1d3548', '24px', 20, 70, 1000, 'back-out');
    win.loopFun($('.Grap_Dis')[0], 85, '#ccc', '#f68338', '#1d3548', '24px', 20, 70, 1000, 'back-out');
    win.loopFun($('.Cad')[0], 88, '#ccc', '#f68338', '#1d3548', '24px', 20, 70, 1000, 'back-out');
  }

  // mixet up start
  var containerEl = document.querySelector('.Portfolio_Items_Area');
  var mixer = mixitup(containerEl);

  // VenoBox start
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  // SLICK SLIDER START
  $('.Testimonial_Slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: true,
    prevArrow: $('.Prev_Arrow'),
    nextArrow: $('.Next_Arrow'),
  });

  // TEAM SLIDER START
  $('.Team_Slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    prevArrow: $('.Prev_Arrow'),
    nextArrow: $('.Next_Arrow'),
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  // BRAND SLIDER START
  $('.Brand_Item_Area').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  // SUBSCRIBE ANIMATION START
  $(document).ready(function () {
    const Subscribe_Section = document.querySelector('#Subscribe_Section');
    for (var i = 1; i <= 100; i++) {
      const blocks = document.createElement('div')
      blocks.classList.add('block');
      Subscribe_Section.appendChild(blocks);
    }

    function generate() {
      anime({
        targets: '.block',
        translateX: function () {
          return anime.random(-700, 700)
        },
        translateY: function () {
          return anime.random(-700, 700)
        },
        scale: function () {
          return anime.random(1, 5)
        },
      })
    }

    generate()
  });

  // SCROLL TOP START
  $(function () {
    // Scroll Event
    $(window).on('scroll', function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 500) $('.Go_To_Top').addClass('Scroll_Active');
      if (scrolled < 500) $('.Go_To_Top').removeClass('Scroll_Active');
    });
    // Click Event
    $('.Go_To_Top').on('click', function () {
      $("html, body").animate({
        scrollTop: "0"
      }, 500);
    });
  });

});