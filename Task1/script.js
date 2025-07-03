const skillsSection = document.querySelector("#skills");
const progressFills = document.querySelectorAll(".progress-fill");

const animateSkills = () => {
  progressFills.forEach(fill => {
    const percent = fill.getAttribute("data-percent");
    fill.style.width = 0;
    fill.style.backgroundColor = "#00bfff";
    fill.style.height = "10px";
    fill.style.borderRadius = "5px";

    setTimeout(() => {
      fill.style.transition = "width 1.5s ease-in-out";
      fill.style.width = percent;
    }, 200);
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
    }
  });
}, {
  threshold: 0.3
});

if (skillsSection) {
  observer.observe(skillsSection);
}

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  const icon = themeToggle.querySelector("i");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
}

if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 800,
    once: true
  });
}
