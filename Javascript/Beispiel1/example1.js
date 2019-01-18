var apples = 5;
var nuts = 17;
var lemons = 9;

//console.log(apples, nuts, lemons);

//console.log('Äpfel: ' + apples * lemons, nuts / apples);

var inputTag='<input type="email">'

//console.log(inputTag);
//console.log('<input type="email" onclick="this.style.backgroundColor=\'black\' ">');


var woche = [
  'Montag',
'Dienstag',
'Mittwoch',
'Donnerstag',
'Freitag'];

var wochenende = new Array('Samstag', 'Sonntag');

//console.log('Die Woche hat: ' + woche.lenght + 'Tage');

if(typeof woche[5] == 'undefined') {
  //console.log('Kein Wochenden');
}
//console.log(woche[3]);


//alert(woche);



var person = {
  alter: 31,
  groesse: 191,
  anrede: 'Herr',
  vorname: 'Willi',
  nachname: 'Putz'
};

var monat = [];
monat['x'] = 'Jänner';
monat['y'] = 'April';

var auto = [['Rücklicht', 'Frontscheinwerfer'],
            ['Seitenspiegel', 'Rückspiegel'],
            ['Fahrer', 'Beifahrer','Kinder']
          ];



//console.log('Sehr geehrter ' + person.anrede + ' ' + person.nachname + ' ' + person.vorname);



var tier = function(vieh) {
  return 'Schöner ' + vieh;
};

//console.log(tier('Vogel'));

var wieIstDeinName = function(person) {
  return person.vorname;
}

//console.log(wieIstDeinName(person));

var himmel = 'schwarz';

if(himmel ===  'blau'){
  console.log('ja');
}
else {
  console.log('Nacht?');
}
