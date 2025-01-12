document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll(".section");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      // Hide all sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // Show the target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });
});
