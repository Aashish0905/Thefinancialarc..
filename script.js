const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const heroVideo = document.getElementById("heroVideo");
const videoControl = document.getElementById("videoControl");
const videoIcon = document.getElementById("videoIcon");
const videoText = document.getElementById("videoText");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

videoControl.addEventListener("click", () => {
  if (heroVideo.paused) {
    heroVideo.play();
    videoIcon.textContent = "Ⅱ";
    videoText.textContent = "Pause video";
    videoControl.setAttribute("aria-label", "Pause background video");
  } else {
    heroVideo.pause();
    videoIcon.textContent = "▶";
    videoText.textContent = "Play video";
    videoControl.setAttribute("aria-label", "Play background video");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".section").forEach(section => observer.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();
