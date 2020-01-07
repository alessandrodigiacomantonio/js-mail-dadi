var allowedEmails = ["luca@gmail.com", "marco@yahoo.com", "roberto@alice.com", "jacopo@hotmail.com", "carlo@tiscali.com", "franco@dominio.com"];
var login = prompt('Inserisci una Email per il login');
var logged = false;
for (var i = 0; i < allowedEmails.length; i++) {
  if (login==allowedEmails[i]) {
    alert('Bentornato');
    var logged = true;
  }
}
if (logged!=true) {
  alert('Non hai inserito una email valida');
}
