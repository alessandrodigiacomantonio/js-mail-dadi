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
while (pareggioPlayers.length!=1 && i==1) {
  comparatore = 0;
  for (i = 0; i < pareggioPlayers.length; i++) {
    dado = Math.ceil(Math.random()*6);
    dadiPlayers[pareggioPlayers[i]] = dado;
    console.log('dado del giocatore che ha pareggiato ' + dadiPlayers[pareggioPlayers[i]] );
    if (comparatore < dadiPlayers[i]) {
      comparatore = dadiPlayers[i];
      pareggioPlayers = [i];
    } else if (comparatore == dadiPlayers[i]) {
      pareggioPlayers.push(i);
    }
    console.log('al termine del ' + ++i + ' ciclo, c\'è/ci sono ' + pareggioPlayers.length + ' pareggio/i\n\n');
    i--;
    console.log(dadiPlayers);
  }
}
console.log('A ' + nomiPlayers[pareggioPlayers[0]] + ' è uscito più grosso !');
