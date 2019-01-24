$("h1").css("color" , "red");
$("h1").css("background-color" , "green");

$("button").on("click", function() {
 var eingabe = $("input[name=Eingabe]").val();
 $("ul").append("<li>" + eingabe + "</li>").addClass("a");

});
