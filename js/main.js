function loadHTML(id, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); // trigger after load
      if (id === "contactModal") {
        bindContactForm(); // Bind the form AFTER modal is loaded
      }
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
}

// Bind form events
function bindContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const spinner = document.getElementById('spinner');
  const thankYou = document.getElementById('thank-you');
  const formError = document.getElementById('form-error');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault(); // VERY important!

      formError.style.display = "none";
      spinner.style.display = "inline-block";
      submitBtn.disabled = true;

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.style.display = "none";
          thankYou.style.display = "block";
        } else {
          const data = await response.json();
          throw new Error(data.message || "Something went wrong!");
        }
      } catch (error) {
        console.error('Form error:', error);
        formError.textContent = error.message;
        formError.style.display = "block";
      } finally {
        spinner.style.display = "none";
        submitBtn.disabled = false;
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("navbar", "components/navbar.html", highlightActiveNav);
  loadHTML("footer", "components/footer.html");
  loadHTML("contactModal", "components/contact-modal.html"); // Contact Modal will auto-bind form inside loadHTML

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
// Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const spinner = document.getElementById('spinner');
  const thankYou = document.getElementById('thank-you');
  const formError = document.getElementById('form-error');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Reset
      formError.style.display = "none";
      spinner.style.display = "inline-block";
      submitBtn.disabled = true;

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.style.display = "none";
          thankYou.style.display = "block";
        } else {
          const data = await response.json();
          throw new Error(data.message || "Something went wrong!");
        }
      } catch (error) {
        console.error('Form error:', error);
        formError.textContent = error.message;
        formError.style.display = "block";
      } finally {
        spinner.style.display = "none";
        submitBtn.disabled = false;
      }
    });
  }
});

