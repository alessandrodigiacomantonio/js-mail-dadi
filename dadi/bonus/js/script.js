alert('Benvenuti a "Chi ce l\'ha più grosso", un gioco pensato per creare disagio');
var numeroPlayers = parseInt(prompt('In quanti volete giocare?'));
var nomiPlayers = [];
var dadiPlayers = [];
for (var i = 0; i < numeroPlayers; i++) {
  var nome = prompt('Nome Giocatore ' + i++ + ' : ');
  nomiPlayers[i] = nome;
  var dado = Math.ceil(Math.random()*10-4);
  dadiPlayers[i] = dado;
}
