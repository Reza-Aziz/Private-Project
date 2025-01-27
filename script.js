// SCROLL MECHANISM
document.addEventListener("DOMContentLoaded", function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const targetElement = document.querySelector(this.getAttribute('href'));
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });