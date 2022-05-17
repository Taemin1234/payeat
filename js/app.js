// 메뉴바

$(function () {
  $(".menu-icon").on("click", function () {
    $(".topnav").toggleClass("responsive");
  });

  //메뉴버튼 클릭 시 스크롤이 되면서 이동
  $(".scroll-move").click(function (event) {
    event.preventDefault();

    $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
});

// $(window).on("scroll", function () {
//   if ($(window).scrollTop() < 230) {
//     $(".navbar").css("opacity", "0.5");
//   } else {
//     $(".navbar").css("opacity", "1");
//   }

//   console.log($("html").scrollTop());
// });

//메인 페이지 사진

$(function () {
  $(".main-img").slick({
    Infinity: true,
    slidesToShow: 3,
    arrows: true,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  });
});

// 스클로 시 인포 박스 올라오기

$(window).on("scroll", function () {
  //297에서 올라오기
  if ($(window).scrollTop() > 270) {
    $(".info-box-wrap").css("transform", "translateY(-3rem)");
  } else {
    $(".info-box-wrap").css("transform", "translateY(3rem)");
  }

  // console.log($("html").scrollTop());
});

// 카운팅

$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

//홈페이지 소개 창 올라오기

// 1번 - 2002 2번 2678 3번 3361
$(window).on("scroll", function () {
  //data101
  if ($(window).scrollTop() > 2002) {
    $("#data101 .page-img, #data101 .info-wrap").css(
      "transform",
      "translateY(0rem)"
    );
  } else {
    $("#data101 .page-img, #data101 .info-wrap").css(
      "transform",
      "translateY(6rem)"
    );
  }

  if ($(window).scrollTop() > 2178) {
    $("#data101 .short-cut-btn").css("transform", "translateY(0rem)");
  } else {
    $("#data101 .short-cut-btn").css("transform", "translateY(6rem)");
  }

  //food101
  if ($(window).scrollTop() > 2678) {
    $("#food101 .page-img, #food101 .info-wrap").css(
      "transform",
      "translateY(0rem)"
    );
  } else {
    $("#food101 .page-img, #food101 .info-wrap").css(
      "transform",
      "translateY(6rem)"
    );
  }

  if ($(window).scrollTop() > 2854) {
    $("#food101 .short-cut-btn").css("transform", "translateY(0rem)");
  } else {
    $("#food101 .short-cut-btn").css("transform", "translateY(6rem)");
  }

  //payeat
  if ($(window).scrollTop() > 3361) {
    $("#payeat .page-img, #payeat .info-wrap").css(
      "transform",
      "translateY(0rem)"
    );
  } else {
    $("#payeat .page-img, #payeat .info-wrap").css(
      "transform",
      "translateY(6rem)"
    );
  }

  if ($(window).scrollTop() > 3537) {
    $("#payeat .short-cut-btn").css("transform", "translateY(0rem)");
  } else {
    $("#payeat .short-cut-btn").css("transform", "translateY(6rem)");
  }
});

// 슬라이더

$(function () {
  $(".story-contents").slick({
    Infinity: true,
    slidesToShow: 3,
    arrows: true,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  });
});
