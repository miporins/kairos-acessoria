document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Function to remove the 'active' class on mobile breakpoint
    function handleMobileBreakpoint(e) {
        if (e.matches) { // If mobile breakpoint is matched
            navLinks.forEach(link => link.classList.remove('active'));
        }
    }
  
    // Create a MediaQueryList object
    const mediaQuery = window.matchMedia('(max-width: 600px)');
  
    // Add a listener for changes in the media query
    mediaQuery.addListener(handleMobileBreakpoint);
  
    // Initial check
    handleMobileBreakpoint(mediaQuery);
  
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
  
          //   event.preventDefault();
  
            // Remove 'active' class de todos os links
            navLinks.forEach(link => link.classList.remove('active'));
  
            // Adiciona 'active' class ao link clicado
            this.classList.add('active');
        });
    });
  });
  
  function handleResize() {
      const images = document.querySelectorAll('.carousel-inner .carousel-item img');
      if (window.matchMedia('(max-width: 760px)').matches) {
          images.forEach(img => img.classList.remove('rounded-pill'));
      } else {
          images.forEach(img => img.classList.add('rounded-pill'));
      }
  }
  // Chama a função de redimensionamento
  handleResize();
  
  // Adicione o listener para o evento de redimensionamento
  window.addEventListener('resize', handleResize);

  // Add header class on scroll
  document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header"); // Seleciona o elemento header
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Ajuste o valor conforme necessário
            header.classList.add("header-scrolled"); // Adiciona a classe ao header
        } else {
            header.classList.remove("header-scrolled"); // Remove a classe do header
        }
    });
});