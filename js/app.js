// 메뉴바

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

$(function () {
  $(".menu-icon").on("click", function () {
    $(".topnav").toggleClass("responsive");
  });
});
