 alert('Benvenuti ad "A chi è uscito più grosso", un gioco pensato per creare disagio.\n\nQuesta versione è 1 vs 1, arriverà entro il pomeriggio anche quella con più giocatori');
 var nomiPlayers = [];
 var dadiPlayers = [];
 for (var i = 0; i < 2; i++) {
   var nome = prompt('Nome Giocatore ' + ++i + ' : ')
   i--;
   nomiPlayers[i] = nome;
   var dado = Math.ceil(Math.random()*6);
   dadiPlayers[i] = dado;
 }
 if ( dadiPlayers[0] > dadiPlayers[1] ) {
   alert(nomiPlayers[0] +': ' + dadiPlayers[0] + '\n' + nomiPlayers[1] + ': ' + dadiPlayers[1] + '\n\n' + 'a '+ nomiPlayers[0] +' è uscito più grosso');
} else if ( dadiPlayers[0] < dadiPlayers[1] ) {
  alert(nomiPlayers[0] +': ' + dadiPlayers[0] + '\n' + nomiPlayers[1] +': ' + dadiPlayers[1] + '\n\n' + 'a '+ nomiPlayers[1] +' è uscito più grosso');
} else {
  alert(nomiPlayers[0] +': ' + dadiPlayers[0] + '\n' + nomiPlayers[1] +': ' + dadiPlayers[1] + '\n\n' + 'Vi è uscito ugualmente grosso');
}
console.log(dadiPlayers);
