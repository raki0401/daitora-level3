
//  1.今までのやつ

// $(function () {
//   var pagetop = $('#page-top');
//   // ボタン非表示
//   pagetop.hide();
//   // 100px スクロールしたらボタン表示
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//       pagetop.fadeIn("200");
//     } else {
//       pagetop.fadeOut();
//     }
//   });
//   pagetop.click(function () {
//     $('body, html').animate({ scrollTop: 0 }, 500);
//     return false;
//   });
// });




//  2. DAY23で自分でカスタマイズしたやつ

// $(function(){

//   $('a[href^="#"]').click(function(){
//     let speed = 800;
//     let id = $(this).attr("href");
//     let target = $("#" == id ? "html" : id);
//     let position = $(target).offset().top;
//     $("html, body").animate({scrollTop: position},speed);
//     return false;
//   });
// });

// $(function(){

//   let pagetop = $('#page-top');
//   pagetop .hide();
//   $(window).on("scroll", function(){
//     if($(this).scrollTop() > 500){
//       $('#page-top').fadeIn();
//     }else{
//       $('#page-top').fadeOut();
//     }
//   });
// });



//  3. DAY23の解答そのまま

jQuery(function() {

  // スムーススクロール
  jQuery('a[href^="#"]').click(function() {
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top - header;
    if ("fixed" !== jQuery(".header").css("position")) {
      position = jQuery(target).offset().top;
    }
    if (0 > position) {
      position = 0;
    }
    jQuery("html, body").animate({
        scrollTop: position
      },
      speed
    );
    return false;
  });

  // スクロール判定
  jQuery(window).on("scroll", function() {

    if (100 < jQuery(this).scrollTop()) {
      jQuery('#page-top').addClass('is-show');
    } else {
      jQuery('#page-top').removeClass('is-show');
    }
  });
});