const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const total = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.getAttribute('data-index'));
    showTestimonial(currentIndex);
    resetAutoRotate();
  });
});

let autoRotate = setInterval(() => {
  currentIndex = (currentIndex + 1) % total;
  showTestimonial(currentIndex);
}, 6000);

function resetAutoRotate() {
  clearInterval(autoRotate);
  autoRotate = setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    showTestimonial(currentIndex);
  }, 6000);
}

// Back to top
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Contact form submit
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
  });
}
let aboutSlides = document.querySelectorAll(".about-slide");
let aboutCurrent = 0;

function cycleAboutImages() {
  aboutSlides.forEach(slide => slide.classList.remove("active"));
  aboutCurrent = (aboutCurrent + 1) % aboutSlides.length;
  aboutSlides[aboutCurrent].classList.add("active");
}

setInterval(cycleAboutImages, 4000); // Change every 4 seconds
 const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
// Reveal scroll-animate elements when in viewport
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  scrollElements.forEach((el) => observer.observe(el));
});
const galleryTrack = document.querySelector('.video-track');
const pauseBtn = document.getElementById('pauseGalleryBtn');

let isPaused = false;

pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;

  // Pause or resume the CSS animation
  galleryTrack.style.animationPlayState = isPaused ? 'paused' : 'running';

  // Update button text
  pauseBtn.textContent = isPaused ? 'Play Gallery' : 'Pause Gallery';
});
document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const icon = toggleButton.querySelector("i");

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Apply saved theme or system preference
  if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark)) {
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const darkModeEnabled = document.body.classList.contains("dark-mode");
    icon.classList.toggle("fa-sun", darkModeEnabled);
    icon.classList.toggle("fa-moon", !darkModeEnabled);
    localStorage.setItem("theme", darkModeEnabled ? "dark" : "light");
  });
});

