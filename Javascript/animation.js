$("#einblenden").on("click", function() {
 $("#quadrat").fadeIn(1000);
});

$("#ausblenden").on("click", function() {
 $("#quadrat").fadeOut(1000);
});


$("#toggle").on("click", function() {
 $("#quadrat").animate({height: 'toggle'});
});
