// --- Scroll Animation with Intersection Observer ---
document.addEventListener("DOMContentLoaded", function() {
  const scrollElements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Optional: unobserve the element after it has been revealed
        // observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  scrollElements.forEach(el => {
    observer.observe(el);
  });
});
