// Attendi che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', function() {
  // Seleziona il pulsante tramite l'ID
  const backToTopButton = document.getElementById("backToTopBtn");
  
  // Verifica che il pulsante esista
  if (!backToTopButton) {
    console.error("Pulsante 'backToTopBtn' non trovato!");
    return;
  }
    
  // Funzione che controlla la posizione di scroll
  function scrollFunction() {
    // Controlla se l'utente ha scrollato più di 20px
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // mostra il bottone che consente di tornare all'inizio pagina
      backToTopButton.classList.add("show");
    } else {
      // nasconde il bottone che consente di tornare ad inizio pagina
      backToTopButton.classList.remove("show");
    }
  }

  // Funzione per animare lo scroll
  function topFunction(e) {
    e.preventDefault(); // Previene il comportamento di default del link
    // Questo usa lo scroll behavior CSS, più fluido
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Collega la funzione di controllo scroll all'evento di scroll della finestra
  window.addEventListener('scroll', scrollFunction);

  // Collega la funzione di scroll al click del pulsante
  backToTopButton.addEventListener('click', topFunction);
  
  // Esegui una prima verifica al caricamento della pagina
  scrollFunction();
});