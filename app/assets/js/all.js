console.log("Hello!");

$(document).ready(() => {

  $(function () {
    $('.navbar-brand').each(function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });

  $(".star").click(function () {
    $(this).toggleClass("font-yellow");
  });

  $(".notify").click(function () {
    $(this).toggleClass("font-yellow");
  });

  $(".expand-more").click(function () {
    $(".verify-more").slideToggle();
  });

  $("#send-mail").click(function () {
    $(this).hide();
    $("#sent").show();
  });
});
