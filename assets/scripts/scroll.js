const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Efeito para 'hidden-up'
        if (entry.target.classList.contains('hidden-up')) {
          entry.target.classList.add('show-up');
        }
        // Efeito para 'hidden-left'
        if (entry.target.classList.contains('hidden-left')) {
          entry.target.classList.add('show-left');
        }
        // Efeito para 'hidden-aparece'
        if (entry.target.classList.contains('hidden-aparece')) {
          entry.target.classList.add('show-aparece');
        }
      } else {
        // Remove as animações, se necessário
        entry.target.classList.remove('show-up');
        entry.target.classList.remove('show-left');
        entry.target.classList.remove('show-aparece');
      }
    });
  });
  
  // Seleciona os elementos com os 3 tipos de animação
  const elementosAnimados = document.querySelectorAll('.hidden-up, .hidden-left, .hidden-aparece');
  elementosAnimados.forEach(el => observer.observe(el));
  