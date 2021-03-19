$(document).ready(function () {

  $(".js-select2").select2();


  $(".open-menu").click(function (){
    $(this).addClass("active").css("z-index", "5");
    $(".close-menu").addClass("active").css("z-index", "6");
    $(".layout").addClass("slid-top");
    $("body").css("overflow","hidden");

  })
  $(".close-menu").click(function (){
    $(this).removeClass("active").css("z-index", "5");;
    $(".open-menu").removeClass("active").css("z-index", "6");
    $(".layout").removeClass("slid-top");
    $("body").css("overflow","inherit");

  })


  $('.slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplayTimeout:5000,
    dots: false,
    autoplay: true,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        dots: false,
        nav:false
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  $('.slider-item').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:true,
    autoplay: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:4
      },
      1100:{
        items:5
      },
      1200:{
        items:6
      }

    }
  })
  $('.slider-times').owlCarousel({
    loop:false,
    margin:10,
    dots: false,
    nav:true,
    autoplay:false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      },
      1100:{
        items:1
      },
      1200:{
        items:1
      }

    }
  })

  $('.booking-dates').owlCarousel({
    items: 3,
    loop:false,
    margin: 0,
    dots: false,
    nav:true,
    autoplay:false,
    responsive:{
      // 0:{
      //   items:1
      // },
      // 600:{
      //   items:1
      // },
      // 1000:{
      //   items:1
      // },
      // 1100:{
      //   items:1
      // },
      // 1200:{
      //   items:1
      // }
    }
  })

  $(".navgation-taps li:first").addClass("active");
  $(".item-tap-one").hide();
  $(".item-tap-one:first").show();

  $(".navgation-taps li").on("click", function () {
      $(".navgation-taps li").removeClass("active");
      $(this).addClass("active");
      $(".item-tap-one").hide();
      $($(this).data("taps")).fadeIn();

  })


  $('#bookDates a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $(e.target).closest('.owl-item').siblings().find('a').removeClass('active show')
  })
});


