const formatTabs = Array.from(document.querySelectorAll("[data-format-tab]"));
const formatPanels = Array.from(document.querySelectorAll("[data-format-panel]"));
const formatLabel = document.querySelector("#format-label");

function selectFormat(format, moveFocus = false) {
  formatTabs.forEach((tab) => {
    const selected = tab.dataset.formatTab === format;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && moveFocus) {
      tab.focus();
    }
  });

  formatPanels.forEach((panel) => {
    const selected = panel.dataset.formatPanel === format;
    panel.classList.toggle("is-active", selected);
    panel.setAttribute("aria-hidden", String(!selected));
  });

  if (formatLabel) {
    formatLabel.textContent = `${format.toUpperCase()} · FORMATTED`;
  }
}

formatTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectFormat(tab.dataset.formatTab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + formatTabs.length) % formatTabs.length;
    selectFormat(formatTabs[nextIndex].dataset.formatTab, true);
  });
});

const urlTabs = Array.from(document.querySelectorAll("[data-url-tab]"));
const urlPanels = Array.from(document.querySelectorAll("[data-url-panel]"));
const urlViewLabel = document.querySelector("#url-view-label");

function selectUrlView(view, moveFocus = false) {
  urlTabs.forEach((tab) => {
    const selected = tab.dataset.urlTab === view;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && moveFocus) {
      tab.focus();
    }
  });

  urlPanels.forEach((panel) => {
    const selected = panel.dataset.urlPanel === view;
    panel.classList.toggle("is-active", selected);
    panel.setAttribute("aria-hidden", String(!selected));
  });

  if (urlViewLabel) {
    urlViewLabel.textContent = `${view.toUpperCase()} VIEW`;
  }
}

urlTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectUrlView(tab.dataset.urlTab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + urlTabs.length) % urlTabs.length;
    selectUrlView(urlTabs[nextIndex].dataset.urlTab, true);
  });
});

const revealItems = Array.from(document.querySelectorAll(".reveal"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.12 },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}

const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
