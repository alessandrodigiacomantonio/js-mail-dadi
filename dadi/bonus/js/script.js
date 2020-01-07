alert('Benvenuti ad "A chi è uscito più grosso", un gioco pensato per creare disagio');
var numeroPlayers = parseInt(prompt('In quanti volete giocare?'));
var nomiPlayers = [];
var dadiPlayers = [];
var pareggioPlayers = [];
var comparatore = 0;
for (var i = 0; i < numeroPlayers; i++) {
  var nome = prompt('Nome Giocatore ' + ++i + ' : ')
  i--;
  nomiPlayers[i] = nome;
  var dado = Math.ceil(Math.random()*6);
  dadiPlayers[i] = dado;
  if (comparatore < dadiPlayers[i]) {
    comparatore = dadiPlayers[i];
    pareggioPlayers = [i];
  } else if (comparatore == dadiPlayers[i]) {
    pareggioPlayers.push(i);
  }
}
console.log(nomiPlayers);
console.log(dadiPlayers);
console.log(pareggioPlayers);
var pareggioPlayersCiclo = pareggioPlayers;
while (pareggioPlayers.length!=1) {
  comparatore = 0;
  for (i = 0; i < pareggioPlayers.length; i++) {
    dado = Math.ceil(Math.random()*6);
    dadiPlayers[pareggioPlayersCiclo[i]] = dado;
    console.log('rilancio dado del ' + ++i + ' giocatore che ha pareggiato: ' + dadiPlayers[pareggioPlayersCiclo[--i]] );
    if (comparatore < dadiPlayers[pareggioPlayersCiclo[i]]) {
      comparatore = dadiPlayers[pareggioPlayersCiclo[i]];
      pareggioPlayers = pareggioPlayersCiclo[i];
    } else if (comparatore == dadiPlayers[pareggioPlayersCiclo[i]]) {
      pareggioPlayers.push(pareggioPlayersCiclo[i]);
    }
    console.log('al termine del ' + ++i + ' spareggio, c\'è/ci sono ' + pareggioPlayers.length + ' giocatori\n\n');
    i--;
    console.log(dadiPlayers);
  }
}
console.log('A ' + nomiPlayers[pareggioPlayers[0]] + ' è uscito più grosso !');
