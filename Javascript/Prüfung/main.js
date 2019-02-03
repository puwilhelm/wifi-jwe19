

$('#password, #secondpassword').keyup(function(){
  var merker = 0;
  var input = $(this).val();
  var vergleich = $(secondpassword).val();
  if( input.length >= 8 ){
    $('#length').addClass('valide');
    merker +=1;
  } else {
    $('#length').removeClass('valide');

  }
  if( input.match(/[A-z]/) ){
    $('#letter').addClass('valide');
    merker +=1;
  } else {
    $('#letter').removeClass('valide');

  } if( input.match(/[A-Z]/) ){
    $('#capital').addClass('valide');
    merker +=1;
  } else {
    $('#capital').removeClass('valide');

  } if( input.match(/\d/) ){
  $('#number').addClass('valide');
  merker +=1;
  } else {
    $('#number').removeClass('valide');

  } if( input.match(/[!@#$%\^&*(){}[\]<>?/|\-+]/) ){
  $('#special').addClass('valide');
   merker +=1;
  } else {
    $('#special').removeClass('valide');

  }
  if (merker == 5 && input == vergleich){
    $('#passwordtext').addClass('valide');
    merker +=1;
    } else {
      $('#passwordtext').removeClass('valide');
  }
  console.log(merker);
  console.log(input);
  console.log(vergleich);
});
