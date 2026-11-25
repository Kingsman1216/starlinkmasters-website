
// STARLINK MASTERS shared interactions
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation"
      );
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-copy]").forEach(button => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy");

      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "Copied!";
      } catch {
        button.textContent = "Till: " + value;
      }

      window.setTimeout(() => {
        button.textContent = "Copy Till number";
      }, 2200);
    });
  });

  const form = document.getElementById("enrolment-form");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const data = new FormData(form);

      const fields = [
        ["Full name", data.get("name")],
        ["Phone number", data.get("phone")],
        ["Email", data.get("email") || "Not provided"],
        ["Course", data.get("course")],
        ["Amount paid (KSh)", data.get("amount")],
        [
          "M-PESA transaction code",
          data.get("transaction") || "Not provided / payment pending"
        ],
        ["Learning arrangement", data.get("arrangement")],
        ["Additional information", data.get("notes") || "None"]
      ];

      const message =
        "STARLINK MASTERS ACADEMY — ENROLMENT REQUEST\n\n" +
        fields
          .map(([label, value]) =>
            `${label}: ${String(value).trim()}`
          )
          .join("\n") +
        "\n\nI would like to proceed with enrolment. Please contact me with the next steps.";

      const feedback = document.getElementById("form-feedback");

      if (feedback) {
        feedback.textContent =
          "Opening WhatsApp. Review your enrolment details and press Send to submit.";
      }

      const url =
        "https://wa.me/254718905020?text=" +
        encodeURIComponent(message);

      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
});
