function loadHTML(id, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); // trigger after load
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
}

function highlightActiveNav() {
  const links = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("navbar", "components/navbar.html", highlightActiveNav);
  loadHTML("footer", "components/footer.html");
  loadHTML("contactModal", "components/contact-modal.html");

  // Wait for footer to load, then update year
  setTimeout(() => {
    const copyrightEl = document.getElementById("copyright-year");
    if (copyrightEl) {
      const startYear = 2024;
      const currentYear = new Date().getFullYear();
      if (currentYear > startYear) {
        copyrightEl.textContent = `${startYear} – ${currentYear}`;
      } else {
        copyrightEl.textContent = `${startYear}`;
      }
    }
  }, 100);
});

function toggleMenu() {
  const menu = document.getElementById('mobileNav');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// Modal controls
function openModal() {
  document.getElementById("contact-modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("contact-modal").style.display = "none";
}
