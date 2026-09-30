const revealItems = document.querySelectorAll('.section, .hero-card, .project-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealItems.forEach((item) => {
  item.classList.add('reveal');
  observer.observe(item);
});

const style = document.createElement('style');
style.textContent = `.reveal{opacity:0;transform:translateY(20px);transition:opacity .7s ease,transform .7s ease}.reveal.visible{opacity:1;transform:none}`;
document.head.appendChild(style);
