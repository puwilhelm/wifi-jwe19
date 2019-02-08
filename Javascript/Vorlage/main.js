$('#abschicken').on("click", function(){

var merker=true;
var merkerPassword=0;
// Anrede validieren
var herr = $('#cf_salutation_mr').is( ":checked" );
var frau = $('#cf_salutation_mrs').is( ":checked" );
var sonstige = $('#cf_salutation_other').is( ":checked" );

if(herr==false && frau==false && sonstige==false){
$('#anredefarbigherr, #anredefarbigfrau, #anredefarbigsonstig').addClass('valide');
  console.log("fehler");
  merker=false;
  $('#anredefehlt').show("display");

}
else
{
  $('#anredefarbigherr, #anredefarbigfrau, #anredefarbigsonstig').removeClass('valide');
$('#anredefehlt').hide("display");
  console.log("top");
}

// namen validieren
var vorname = $('#cf_firstname').val().length;
var nachname = $('#cf_lastname').val().length;

if(vorname < 2 ){
  console.log("vorname zu kurz");
  $('#vornameText').addClass('valide');
  merker=false;
  $('#vornameZukurz').show("display");

}
else{
  $('#vornameText').removeClass('valide');
  $('#vornameZukurz').hide("display");

}

if(nachname < 2 ){
  $('#NachnameText').addClass('valide');
  console.log("nachname zu kurz");
  $('#nachnameZukurz').show("display");

  merker=false;
}
else{
  $('#NachnameText').removeClass('valide');
  $('#nachnameZukurz').hide("display");

}

// email validieren
var email = $('#cf_email').val().length;
if(email == 0){
  $('#emailText').addClass('valide');
  console.log("Mailadrese eingeben");
  $('#emailLeer').show("display");

  merker=false;
}
else{
  $('#emailText').removeClass('valide');
  $('#emailLeer').hide("display");

}

// Passwörter validieren
var passwort = $('#cf_pwd').val();
var passwortConfirm = $('#cf_pwd_confirmation').val();

var passwortLaenge = $('#cf_pwd').val().length;
var passwortLaengeConfirm = $('#cf_pwd_confirmation').val().length;

if(passwortLaenge<6 || passwort != passwortConfirm){
  $('#passwortText').addClass('valide');
  merkerPassword=1;
  console.log("passwort zu kurz");
  merker=false;
  $('#passwortFalse').show("display");

}
else{
  $('#passwortText').removeClass('valide');
  $('#passwortFalse').hide("display");


}

if(passwortLaengeConfirm<6 || passwort != passwortConfirm){
  $('#passwortTextConfirm').addClass('valide');
  console.log("passwortConfirm zu kurz");
  merker=false;
  merkerPassword=1;
  $('#passwortFalseConfirm').show("display");


}
else{
  $('#passwortTextConfirm').removeClass('valide');
  $('#passwortFalseConfirm').hide("display");


}



// if(passwort != passwortConfirm && merkerPassword==1 && passwortLaenge>0){
//   console.log("Passwörter nicht gleich");
//   $('#passwortText').addClass('valide');
//   merker=false;
// }
// else{
//   $('#passwortTextConfirm, #passwortText').removeClass('valide');
// }


// Datum prüfen
var datum = $('#cf_date').val();
if(datum == ''){
  $('#datumText').addClass('valide');
  merker=false;
  console.log("kein Datum");
  $('#datumLeer').show("display");

}
else{
  $('#datumText').removeClass('valide');
  $('#datumLeer').hide("display");

}



// Checkbox prüfen
var checkbox = $('#cf_policy').prop( "checked" );
if(checkbox == false)
{
  $('#datenschutzText').addClass('valide');
  console.log("checkbox nicht aktiviert");
  merker=false;
  $('#datenschutzLeer').show("display");

}
else{
  $('#datenschutzText').removeClass('valide');
  $('#datenschutzLeer').hide("display");
}



return merker;
});
