$(function(){
  $('.accordion-head').click(function(){
    $(this).next().slideToggle(600);
    $(this).children('.accordion-icon').toggleClass('is-open');
  });
});