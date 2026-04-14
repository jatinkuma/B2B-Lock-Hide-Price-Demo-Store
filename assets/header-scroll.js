/**
 * Header Scroll Effects
 * Toggles glass effect on header after 60px scroll
 */
(function() {
  const header = document.querySelector('.header-wrapper');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
})();
