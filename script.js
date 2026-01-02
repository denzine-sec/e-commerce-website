
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = cartCount;
  });
}

// Greeting & date
const greeting = document.getElementById("greeting");
const dateEl = document.getElementById("date");

if (greeting && dateEl) {
  const hour = new Date().getHours();
  let message = "Good evening";

  if (hour < 12) message = "Good morning";
  else if (hour < 18) message = "Good afternoon";

  greeting.textContent = message;
  dateEl.textContent = new Date().toDateString();
}

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// Form validation
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });
}
