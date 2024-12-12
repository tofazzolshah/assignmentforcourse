// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
        });
    });
});

const titleElement = document.getElementById("dynamic-title");
const words = ["Welcome to My Portfolio", "I Am Tofazzol", "Web Developer", "Software Developer", "CSE Student"];
let wordIndex = 0;
let charIndex = 0;

function typeWords() {
    if (charIndex < words[wordIndex].length) {
        titleElement.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeWords, 100);
    } else {
        setTimeout(eraseWords, 1500);
    }
}

function eraseWords() {
    if (charIndex > 0) {
        titleElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseWords, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWords, 500);
    }
}

typeWords();

const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight - 100) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);

// Add visible class to section styles
document.addEventListener("DOMContentLoaded", () => {
    sections.forEach(section => {
        section.classList.add("hidden");
    });
});
