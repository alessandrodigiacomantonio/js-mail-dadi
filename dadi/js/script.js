 alert('Benvenuti ad "A chi è uscito più grosso", un gioco pensato per creare disagio\nQuesta versione è 1 vs 1, arriverà entro il pomeriggio anche quella con più giocatori');
 var nomiPlayers = [];
 var dadiPlayers = [];
 for (var i = 0; i < 2; i++) {
   var nome = prompt('Nome Giocatore ' + i++ + ' : ');
   nomiPlayers[i] = nome;
   var dado = Math.ceil(Math.random()*10-4);
   dadiPlayers[i] = dado;
 }
 if ( dadiPlayers[0] > dadiPlayers[1] ) {
   alert('a 'nomiPlayers[0]+' è uscito più grosso');
 } else if ( dadiPlayers[0] < dadiPlayers[1] ) {
  alert('a 'nomiPlayers[1]+' è uscito più grosso');
} else {
   alert('Vi è uscito ugualmente grosso');
}
