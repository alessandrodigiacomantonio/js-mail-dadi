alert('Benvenuti a "Chi ce l\'ha più grosso", un gioco pensato per creare disagio');
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
