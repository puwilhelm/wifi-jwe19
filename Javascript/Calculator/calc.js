var ergebnis = "";

$(".insert").click(function() {
  var current = $(this);
  ergebnis += current.val();
  $(".screen").val(ergebnis);
});

$(".btn-clean").click(function() {
  ergebnis ="";
  $(".screen").val(ergebnis);
});

$(".btn-back").click(function() {
  console.log(ergebnis);
 ergebnis = ergebnis.substr(0, ergebnis.length-1);
 $(".screen").val(ergebnis);
});

$(".btn-equal").click(function() {
  ergebnis = eval(ergebnis).toString();
  $(".screen").val(ergebnis);
});
