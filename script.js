// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Show scroll-to-top button when scroll down
window.addEventListener("scroll", function () {
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Responsive navbar toggle
let navbarToggle = document.getElementById("navbarToggle");
let navbar = document.getElementById("navbar");

navbarToggle.addEventListener("click", function () {
  navbar.classList.toggle("show");
});

function closeResolution() {
  document.querySelector('.resolution').style.display = 'none';
}

document.querySelectorAll('#projects .project-box').forEach(box => {
  box.addEventListener('click', function() {
    const overlay = this.querySelector('.overlay');
    if (overlay) {
      if (overlay.style.opacity === '1') {
        overlay.style.opacity = '0';
      } else {
        overlay.style.opacity = '1';
      }
    }
  });
});
