function calcularNotaFinal(teoria, practica) {
    return (teoria * 0.6) + (practica * 0.4);
  }
  
  
  function esNotaAlta(nota) {
    return nota >= 4.0;
  }
  
  
  function evaluarExamen(teoria, practica) {
    let notaFinal = calcularNotaFinal(teoria, practica);
  
    if (esNotaAlta(notaFinal)) {
      alert("¡La nota final fue alta! (" + notaFinal.toFixed(2) + ")");
    } else {
      alert("La nota final no fue alta. (" + notaFinal.toFixed(2) + ")");
    }
  }
  
  
  let teoria = parseFloat(prompt("Ingresa la nota de teoría (0 a 5):"));
  let practica = parseFloat(prompt("Ingresa la nota de práctica (0 a 5):"));
  
  
  evaluarExamen(teoria, practica);