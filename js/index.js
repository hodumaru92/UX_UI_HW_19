document.addEventListener('DOMContentLoaded', function() {
    const viewProjectBtns = document.querySelectorAll('.item2 button, .item3 button');
  
    viewProjectBtns.forEach(btn => {
      btn.addEventListener('mouseenter', function() {
 
        btn.style.opacity = 1;
      });
  
 
      btn.addEventListener('mouseleave', function() {
 
        btn.style.opacity = 0.7;
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.style.transition = 'color 0.3s';
            link.style.color = '#5BA470';
        });

        link.addEventListener('mouseleave', function() {
            link.style.transition = 'color 0.3s';
            link.style.color = 'black';
        });

        link.addEventListener('click', function(event) {
            event.preventDefault();

            link.style.color = '#5BA470';
        });
    });
});




