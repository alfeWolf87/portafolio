window.addEventListener('mousemove', (e) => {
  // Captura las coordenadas del cursor respecto a la pantalla
  const x = e.clientX;
  const y = e.clientY;
  
  // Modifica las variables CSS en el elemento raíz (:root)
  document.documentElement.style.setProperty('--x', `${x}px`);
  document.documentElement.style.setProperty('--y', `${y}px`);
});