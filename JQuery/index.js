$("h1").css("color", "red");

$("input").keypress(function(evt) {
  $("h1").text(evt.key);
});
