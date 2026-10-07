
// Pass 1: no forms, booking API, cost animation or interactive system nodes.
document.documentElement.classList.add("js");
const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelector("[data-nav-links]");
if (menuButton && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Navigation öffnen");
  };
  menuButton.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Navigation schließen" : "Navigation öffnen");
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
      closeMenu();
      menuButton.focus();
    }
  });
}
const header = document.querySelector("[data-site-header]");
if (header) {
  const updateHeader = () => header.classList.toggle("is-compact", window.scrollY > 28);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}
const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach(el => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries, io) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(el => observer.observe(el));
}

// Calculator formula and input bounds carried over from the premium preview.
(() => {
  const calculator = document.querySelector('[data-friction-calculator]');
  if (!calculator) return;
  const $ = selector => calculator.querySelector(selector);
  const euro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  const num = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1 });
  const inputs = ['team', 'minutes', 'cost', 'days'].map(id => $('#calc-' + id));
  function calculate() {
    $('#calc-team-value').textContent = inputs[0].value + ' Personen';
    $('#calc-minutes-value').textContent = inputs[1].value + ' Minuten';
    inputs.forEach(el => el.setAttribute('aria-invalid', String(!el.checkValidity())));
    if (inputs.some(el => !el.checkValidity())) {
      $('#calc-error').textContent = 'Bitte gültige Werte eingeben: 1–1.000 €/Std. und 1–31 Tage.';
      ['monthly', 'annual', 'hours'].forEach(id => { $('#calc-' + id).textContent = '—'; delete $('#calc-' + id).dataset.value; });
      return;
    }
    $('#calc-error').textContent = '';
    const [t, m, c, d] = inputs.map(el => Number(el.value));
    const hours = t * m / 60 * d, monthly = hours * c;
    $('#calc-monthly').textContent = euro.format(monthly);
    $('#calc-monthly').dataset.value = monthly;
    $('#calc-annual').textContent = euro.format(monthly * 12);
    $('#calc-annual').dataset.value = monthly * 12;
    $('#calc-hours').textContent = num.format(hours);
  }
  inputs.forEach(el => el.addEventListener('input', calculate));
  calculate();
})();
