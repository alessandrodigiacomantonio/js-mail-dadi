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
var contenitore = pareggioPlayers;
while (pareggioPlayers.length != 1) {
  comparatore = 0;
  console.log(pareggioPlayers);
  for (i = 0; i < pareggioPlayers.length; i++) {
  dado = Math.ceil(Math.random()*6);
  dadiPlayers[pareggioPlayers[i]] = dado;
  console.log('nuovo valore ' + dadiPlayers[pareggioPlayers[i]] + ' di ' + pareggioPlayers[i]);
  if (comparatore < dadiPlayers[pareggioPlayers[i]]) {
    comparatore = dado;
    contenitore = [];
    contenitore[0] = [pareggioPlayers[i]];
  } else if (comparatore == dadiPlayers[pareggioPlayers[i]]) {
    contenitore.push([pareggioPlayers[i]]);
    }
  }
  pareggioPlayers = contenitore;
  console.log(pareggioPlayers);
}
console.log('A ' + nomiPlayers[pareggioPlayers[0]] + ' è uscito più grosso !');
