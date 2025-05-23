const accordions = Array.from(document.querySelectorAll('.accordion'));
  const panels = Array.from(document.querySelectorAll('.panel'));

  accordions.forEach((accordion, index) => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
        
        if (panels[index].style.display === 'block') {
            panels[index].style.display = 'none';
          } else {
            panels[index].style.display = 'block';
          }
        });
      });