
// Smoothly move from the opening screen to the story
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
  document.getElementById("story").scrollIntoView({
    behavior: "smooth"
  });

  createHearts(15);
});

// Open the romantic letter
const envelopeButton = document.getElementById("envelopeButton");
const letterContent = document.getElementById("letterContent");
const envelopeHint = document.getElementById("envelopeHint");

envelopeButton.addEventListener("click", () => {
  if (envelopeButton.classList.contains("open")) {
    return;
  }

  envelopeButton.classList.add("open");
  envelopeHint.textContent = "A little something from my heart ❤️";

  // Show the letter after the envelope animation
  setTimeout(() => {
    letterContent.hidden = false;

    setTimeout(() => {
      letterContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 200);

    createHearts(18);
  }, 700);
});

// Final surprise
const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", () => {
  surpriseMessage.hidden = false;
  surpriseButton.textContent = "I love you, Baby ❤️";
  surpriseButton.disabled = true;

  createHearts(35);

  setTimeout(() => {
    surpriseMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 200);
});

// Floating hearts and petals
function createHearts(amount = 12) {
  const layer = document.getElementById("petalLayer");
  const symbols = ["♡", "♥", "✿"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "petal";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (14 + Math.random() * 18) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heart.style.animationDelay = (Math.random() * 1.5) + "s";

    layer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 9000);
  }
}

// Reveal sections when they enter the screen
const revealElements = document.querySelectorAll(
  ".intro, .memory-card, .moment-card, .love-section, .letter-section, .final-section"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

// A few gentle floating hearts when the page opens
window.addEventListener("load", () => {
  setTimeout(() => createHearts(8), 1000);
});
