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
  handleResize();
  
  // Listener para o evento de redimensionamento
  window.addEventListener('resize', handleResize);

  // Add header class on scroll
  document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var nav = document.querySelector("nav");
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.getElementById("navbarTogglerDemo02");
    var openIcon = document.querySelector(".navbar-toggler-icon.open-icon");
    var closeIcon = document.querySelector(".navbar-toggler-icon.close-icon");

    function toggleMenuOpenClass() {
        if (navbarCollapse.classList.contains("show")) {
            nav.classList.add("menu-open");
            openIcon.classList.remove("d-none");
            closeIcon.classList.add("d-none");
        } else {
            nav.classList.remove("menu-open");
            openIcon.classList.add("d-none");
            closeIcon.classList.remove("d-none");
        }
    }

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }

        toggleMenuOpenClass();
    });

    navbarToggler.addEventListener("click", function() {
        setTimeout(toggleMenuOpenClass, 30);
    });
});