// Contoh: highlight menu sesuai section saat scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".page-section");
  const scrollPos = window.scrollY + 100;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      const id = sec.getAttribute("id");
      document.querySelectorAll(".navbar a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + id);
      });
    }
  });
});
