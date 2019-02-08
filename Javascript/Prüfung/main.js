var merker = 0;

$('#password').keyup(function(){
  merker=0;
  var input = $(password).val();
  var vergleich = $(secondpassword).val();

  if( input.length >= 8 ){
    $('#length').addClass('valide');
    merker +=1;
  }
  else {
    $('#length').removeClass('valide');
    merker -=1;
  }

  if( input.match(/[A-z]/) ){
    $('#letter').addClass('valide');
    merker +=1;
  }
 else
 {
    $('#letter').removeClass('valide');
    merker -=1;
  }

  if( input.match(/[A-Z]/) )
  {
    $('#capital').addClass('valide');
    merker +=1;
  }
  else
  {
    $('#capital').removeClass('valide');
    merker -=1;
  }

  if( input.match(/\d/) )
  {
  $('#number').addClass('valide');
  merker +=1;
  }

  else
  {
    $('#number').removeClass('valide');
    merker -=1;
  }
  if( input.match(/[!@#$%\^&*(){}[\]<>?/|\-+]/) )
  {
  $('#special').addClass('valide');
   merker +=1;
  }
  else
  {
    $('#special').removeClass('valide');
    merker -=1;
  }

  console.log('merker:' + merker);
  console.log(input);
  console.log(vergleich);
});


$('#password, #secondpassword').keyup(function(){

  var input = $(password).val();
  var vergleich = $(secondpassword).val();
  if (input == vergleich && input!='' && merker == 5){
    $('#passwordtext').addClass('valide');
    $('#knopf').removeAttr('disabled');
    }
    else
    {
      $('#passwordtext').removeClass('valide');
      $('#knopf').prop('disabled',true);
      $('#knopf').attr("name", "Der Knopf");
      $('#chk1,#chk2').prop("checked", true);
      var x = $('#datepicker').val();
      console.log(x);
    }
});

$('#datepicker').on("change",function(){
  var x = $('#datepicker').val();
  console.log(x);
});



    if ( elem.checked )
    if ( $( elem ).prop( "checked" ) )
    if ( $( elem ).is( ":checked" ) )
