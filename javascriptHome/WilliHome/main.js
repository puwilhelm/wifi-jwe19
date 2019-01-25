$("h1").css("color" , "red");
$("h1").css("background-color" , "green");

$("button").on("click", function() {
 var eingabe = $("input[name=Eingabe]").val();
 if(!isNaN(eingabe)){
 $("ul").append("<li>" + eingabe + "</li>").addClass("a");
}
else {
  alert("Fehler - Bitte geben Sie eine zahl ein");
     }
});
