$(document).ready(function() {
  $(document).delegate(".open", "click", function(event) {
    $(this).addClass("opened");
    event.stopPropagation();
  });
  $(document).delegate("body", "click", function(event) {
    $(".open").removeClass("opened");
  });
  $(document).delegate(".cls", "click", function(event) {
    $(".open").removeClass("opened");
    event.stopPropagation();
  });
});
