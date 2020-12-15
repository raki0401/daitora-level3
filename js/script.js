
// $(function () {
//   var pagetop = $('#page-top');
//   // ボタン非表示
//   pagetop.hide();
//   // 100px スクロールしたらボタン表示
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 1000) {
//       pagetop.fadeIn("800");
//     } else {
//       pagetop.fadeOut();
//     }
//   });
//   pagetop.click(function () {
//     $('body, html').animate({ scrollTop: 0 }, 500);
//     return false;
//   });
// });
$(function(){

  $('a[href^="#"]').click(function(){
    let speed = 800;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top;
    $("html, body").animate({scrollTop: position},speed);
    return false;
  });
})

$(function(){

  let pagetop = $('#page-top');
  pagetop .hide();
  $(window).on("scroll", function(){
    if($(this).scrollTop() > 1000){
      $('#page-top').fadeIn(900);
    }else{
      $('#page-top').fadeOut(100);
    }
  });
});