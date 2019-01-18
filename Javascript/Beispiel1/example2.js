console.log('Dokument lädt');

$(document).ready(function(){
  console.log('Fertig geladen');
  $('button').click(function(){
    console.log('Bitte');
 // $(this).css({
 //  'width':'300px'
 // })

function timeout() {
  window.setTimeout(function() {
    $('button').removeClass('sending');
    $('button').text('gesendet');
    $(this).removeAttr('disabled');
  }, 3000);
}

 $(this).addClass('sending');
 $(this).text(' wird gesendet');
 $(this).attr('disabled',true);
 timeout();
  });





});
