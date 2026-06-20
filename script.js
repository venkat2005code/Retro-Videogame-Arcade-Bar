document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const dirToggle = document.getElementById('dir-toggle');
  const htmlElement = document.documentElement;
  
  // Theme Toggle Logic
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
  });

  // RTL/LTR Toggle Logic
  // Instruction: "Display only the active mode in the RTL/LTR toggle — show 'LTR' when in LTR mode and 'RTL' when in RTL mode"
  dirToggle.addEventListener('click', () => {
    const currentDir = htmlElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    
    htmlElement.setAttribute('dir', newDir);
    dirToggle.textContent = newDir.toUpperCase();
  });
  
  // Initialize the text based on current dir
  const initialDir = htmlElement.getAttribute('dir') || 'ltr';
  dirToggle.textContent = initialDir.toUpperCase();

  // Smooth Scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if(targetId === '#') return; // Skip empty links like dropdown triggers
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile menu if open after clicking a smooth scroll link
        const headerContainer = document.querySelector('.header-container');
        if (headerContainer.classList.contains('menu-open')) {
          headerContainer.classList.remove('menu-open');
        }
      }
    });
  });

  // Hamburger Menu Logic
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const headerContainer = document.querySelector('.header-container');
  
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      headerContainer.classList.toggle('menu-open');
    });
  }
});
