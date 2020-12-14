
  $(".js-drawer").on("click", function(e){
    e.preventDefault();
    let targetClass = $(this).attr("data-target");
    $("." + targetClass).toggleClass("is-checked");
    return false;
  });
