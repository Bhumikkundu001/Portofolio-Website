// === script.js ===

// Typed.js Effect
const typed = new Typed(".typing", {
  strings: ["Web Developer", "AI/ML Enthusiast", "Creative Coder"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Dark/Light Mode Toggle
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

// Language Switcher
const translations = {
  en: {
    greeting: "Hi, I'm Bhumik",
    intro: "Web Developer | AI/ML Enthusiast",
    aboutTitle: "About Me",
    aboutText:
      "I'm a Computer Science student at Bennett University. I love building projects, exploring tech, and solving problems using AI and web development.",
    servicesTitle: "Services",
    portfolioTitle: "Portfolio",
    contactTitle: "Contact",
  },
  hi: {
    greeting: "नमस्ते, मैं भुमिक हूँ",
    intro: "वेब डेवलपर | एआई/एमएल उत्साही",
    aboutTitle: "मेरे बारे में",
    aboutText:
      "मैं बेनेट यूनिवर्सिटी का कंप्यूटर साइंस का छात्र हूँ। मैं प्रोजेक्ट बनाना, तकनीक को एक्सप्लोर करना और एआई व वेब डेवलपमेंट से समस्याओं को हल करना पसंद करता हूँ।",
    servicesTitle: "सेवाएं",
    portfolioTitle: "पोर्टफोलियो",
    contactTitle: "संपर्क करें",
  },
};

const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[selectedLang][key];
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbar = document.querySelector('.navbar');
  if (navbarToggle && navbar) {
    navbarToggle.addEventListener('click', function () {
      navbar.classList.toggle('open');
    });

    // Close menu when any nav link is clicked (on mobile)
    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 700) {
          navbar.classList.remove('open');
        }
      });
    });
  }
});
