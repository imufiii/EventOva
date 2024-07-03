document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove 'active' class from all links
      links.forEach((item) => {
        item.classList.remove("active");
      });

      // Add 'active' class to the clicked link
      link.classList.add("active");

      const target = document.querySelector(e.target.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
