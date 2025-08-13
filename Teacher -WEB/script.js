// ✅ Smooth Scroll (only once)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ✅ Reveal Animation with IntersectionObserver (more reliable)
const reveals = document.querySelectorAll(".reveal, .module-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.1 }); // 10% visible

reveals.forEach(el => observer.observe(el));

// ✅ Collapsible Sections
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".collapsible").forEach(button => {
    button.addEventListener("click", function() {
      this.classList.toggle("active-btn");
      let content = this.nextElementSibling;
      content.style.display = (content.style.display === "block") ? "none" : "block";
    });
  });
});
