$(function(){
  $(".js-modal-open").click(function(e){
    e.preventDefault();
    let target = $(this).data("target");
    $("." + target).addClass("is-show");
    return false;
  });
  $(".js-modal-close").click(function(e){
    e.preventDefault();
    let target = $(this).data("target");
    $("." + target).removeClass("is-show");
    return false;
  });
});