
const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelector("[data-nav-links]");
if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const header = document.querySelector("[data-site-header]");
if (header) {
  const updateHeader = () => header.classList.toggle("is-compact", window.scrollY > 28);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

const current = document.body.dataset.current;
document.querySelectorAll("[data-nav-link]").forEach((link) => {
  if (link.dataset.navLink === current) link.setAttribute("aria-current", "page");
});

document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll("details").forEach((other) => {
      if (other !== item && other.closest("[data-accordion]") === item.closest("[data-accordion]")) other.open = false;
    });
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");
if (reduceMotion) {
  revealItems.forEach((el) => el.classList.add("is-visible"));
  document.querySelectorAll(".cost-chain").forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((el) => io.observe(el));

  const costObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelector(".cost-chain")?.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  document.querySelectorAll("[data-cost-chain]").forEach((el) => costObserver.observe(el));
}

const nodeTexts = {
  menschen: ["Menschen", "Technik funktioniert dauerhaft nur dann, wenn die Menschen damit arbeiten können."],
  prozesse: ["Prozesse", "Automatisierung beschleunigt Abläufe. Deshalb sollte vorher klar sein, ob der Ablauf funktioniert."],
  wissen: ["Wissen", "KI kann sinnvoll unterstützen, wenn relevantes Wissen verfügbar und auffindbar ist."],
  entscheidungen: ["Entscheidungen", "Nicht jede Entscheidung gehört an eine KI. Entscheidend ist, wo Regeln reichen und wo menschliches Urteil gebraucht wird."],
  daten: ["Daten", "Daten bestimmen, womit ein System arbeiten kann und wie zuverlässig das Ergebnis wird."],
  technik: ["Technik", "Technik kommt dann ins Spiel, wenn klar ist, was sie lösen soll."],
};
const edges = {
  menschen: ["menschen-prozesse", "menschen-wissen"],
  prozesse: ["menschen-prozesse", "prozesse-daten", "prozesse-entscheidungen"],
  wissen: ["menschen-wissen", "wissen-entscheidungen", "wissen-daten"],
  entscheidungen: ["wissen-entscheidungen", "entscheidungen-technik", "prozesse-entscheidungen"],
  daten: ["prozesse-daten", "daten-technik", "wissen-daten"],
  technik: ["entscheidungen-technik", "daten-technik"],
};
document.querySelectorAll("[data-system-network]").forEach((net) => {
  const buttons = [...net.querySelectorAll("[data-node]")];
  const lines = [...net.querySelectorAll("line[data-edge]")];
  const title = net.querySelector("[data-system-title]");
  const text = net.querySelector("[data-system-text]");
  let locked = null;
  function setActive(name) {
    buttons.forEach((button) => {
      const connected = name && edges[name]?.some((edge) => edge.includes(button.dataset.node));
      button.classList.toggle("is-active", button.dataset.node === name);
      button.classList.toggle("is-muted", !!name && button.dataset.node !== name && !connected);
    });
    lines.forEach((line) => line.classList.toggle("is-active", !!name && edges[name]?.includes(line.dataset.edge)));
    if (name && nodeTexts[name]) {
      title.textContent = nodeTexts[name][0];
      text.textContent = nodeTexts[name][1];
    } else {
      title.textContent = "Wechselwirkungen sichtbar machen";
      text.textContent = "Menschen, Prozesse, Wissen, Entscheidungen, Daten und Technik greifen ineinander. Genau dort entsteht der Unterschied zwischen Tool-Kauf und tragfähiger Lösung.";
    }
  }
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => { if (!locked) setActive(button.dataset.node); });
    button.addEventListener("focus", () => { if (!locked) setActive(button.dataset.node); });
    button.addEventListener("mouseleave", () => { if (!locked) setActive(null); });
    button.addEventListener("click", () => { locked = locked === button.dataset.node ? null : button.dataset.node; setActive(locked); });
  });
});

const started = document.querySelector("[data-form-started-at]");
if (started) started.value = String(Date.now());
document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    status.className = "form-status";
    status.textContent = "";
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return;
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error("submit failed");
      form.reset();
      status.textContent = "Danke für deine Anfrage. Ich melde mich in Kürze.";
      status.classList.add("is-success");
      window.dispatchEvent(new CustomEvent("mw:event", { detail: { name: "form_submit" } }));
    } catch (error) {
      status.textContent = "Das Formular konnte gerade nicht gesendet werden. Bitte sende dein Thema direkt an kontakt@mariowittmer.de.";
      status.classList.add("is-error");
    }
  });
});
