(function() {
   var codigos = {
      'login.html' : '01',
      'inici.html' : '02',
      'llista-usuaris.html' : '03',
      'detall-usuari.html' : '04',
      'llista-circuits.html' : '05',
      'detall-circuit.html' : '06',
      'llista-organs.html' : '07',
      'detall-organ.html' : '08',
      'llista-backoffices.html' : '09',
      'detall-backoffice.html' : '10',
      'estat-general.html' : '11',
      'resum-peticions.html' : '12',
      'llista-peticions.html' : '13',
      'resum-sollicituds.html' : '14',
      'llista-sollicituds.html' : '15',
      'detall-sollicitud.html' : '16',
      'resum-transaccions.html' : '17',
      'resum-transaccions-tipus.html' : '18',
      'llista-transaccions.html' : '19',
      'detall-transaccio.html' : '20',
      'llista-trazabilitat.html' : '21',
      'panel-administracio.html' : '22'
   };
   
   for (var i in codigos) {
      if (window.location.href.indexOf(i) >= 0) {
         $('body').prepend('<div class="gs-scr">SCR-' + codigos[i] + '</div>');
      }
   }

})();

