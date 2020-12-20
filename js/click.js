$(function(){
  $('.header-nav ul li a').click(function(){
    $('.header-nav ul li a').removeClass('is-active');
    $(this).addClass('is-active');
    return false;
  });
});