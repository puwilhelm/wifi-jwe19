//let wertDesFeldes = $("input").val();

// let wertDesFeldes = $("input").attr("value");
//let wertDesFeldes = $("p").text();
//let wertDesFeldes = $("p").html();

// let zahl1 = parseInt($(".zahl1").val());
// let zahl2 = parseInt($(".zahl2").val());
//
// $(".ergebnis").val(zahl1 + zahl2);

$(".numberbtn").click(function() {
  var current = $(this);
  $(".ergebnis").val(current.val());
});

$(".backbtn").click(function() {
 var aktuellesErgebnis = $(".ergebnis").val();
$(".ergebnis").val(aktuellesErgebnis.substr(0, aktuellesErgebnis.length-1));
});
