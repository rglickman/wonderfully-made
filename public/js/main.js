/**
 * ============================================================================
 * WONDERFULLY MADE REFLEXOLOGY — INTERACTIVE UI & DATA SYNC (main.js)
 * ============================================================================
 */

(function () {
  "use strict";

  const data = window.WONDERFULLY_MADE_DATA || {};

  // 1. Sticky Header & Mobile Navigation Drawer
  function initNavigation() {
    const header = document.getElementById("site-header");
    const menuBtn = document.getElementById("mobile-menu-toggle");
    const nav = document.getElementById("main-nav");

    if (header) {
      window.addEventListener(
        "scroll",
        () => {
          if (window.scrollY > 18) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        },
        { passive: true }
      );
    }

    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
      });
    }
  }

  // 2. Sync simple data-wm-bind elements from site-data.js
  function syncGlobalBindings() {
    if (!data.business) return;

    document.querySelectorAll("[data-wm-phone]").forEach((el) => {
      el.textContent = data.business.phoneDisplay;
      if (el.tagName === "A") {
        el.setAttribute("href", data.business.phoneHref);
      }
    });

    document.querySelectorAll("[data-wm-email]").forEach((el) => {
      el.textContent = data.business.email;
      if (el.tagName === "A") {
        el.setAttribute("href", data.business.emailHref);
      }
    });

    if (data.pricing && Array.isArray(data.pricing.services)) {
      data.pricing.services.forEach((svc) => {
        document.querySelectorAll(`[data-wm-price="${svc.id}"]`).forEach((el) => {
          el.textContent = svc.price;
        });
      });
      document.querySelectorAll("[data-wm-travel-fee]").forEach((el) => {
        el.textContent = data.pricing.travelFee;
      });
    }
  }

  // 3. Interactive Reflexology Zone Map Explorer (Front Page)
  function initReflexZoneExplorer() {
    const stageSvgContainer = document.getElementById("zone-svg-container");
    const zoneListEl = document.getElementById("zone-selector-list");
    const detailBadge = document.getElementById("zone-detail-badge");
    const detailTitle = document.getElementById("zone-detail-title");
    const detailLocation = document.getElementById("zone-detail-location");
    const detailBenefits = document.getElementById("zone-detail-benefits");
    const modeFootBtn = document.getElementById("zone-mode-foot");
    const modeHandBtn = document.getElementById("zone-mode-hand");

    if (!stageSvgContainer || !zoneListEl || !data.reflexZones) return;

    let currentMode = "foot"; // 'foot' | 'hand'
    let activeZoneIndex = 0;

    const footSvgMarkup = `
      <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Anatomical Foot Reflexology Map">
        <!-- Vertical Zone Guide Lines -->
        <line x1="28" y1="8" x2="28" y2="122" stroke="#C09348" stroke-width="0.4" stroke-dasharray="2 2" opacity="0.5"/>
        <line x1="40" y1="8" x2="40" y2="122" stroke="#C09348" stroke-width="0.4" stroke-dasharray="2 2" opacity="0.5"/>
        <line x1="52" y1="8" x2="52" y2="122" stroke="#C09348" stroke-width="0.4" stroke-dasharray="2 2" opacity="0.5"/>
        <line x1="64" y1="8" x2="64" y2="122" stroke="#C09348" stroke-width="0.4" stroke-dasharray="2 2" opacity="0.5"/>
        <line x1="74" y1="12" x2="74" y2="122" stroke="#C09348" stroke-width="0.4" stroke-dasharray="2 2" opacity="0.5"/>
        <!-- Horizontal Riley Divisions -->
        <path d="M22 30 Q50 26 78 34" stroke="#386650" stroke-width="0.5" stroke-dasharray="1.5 2" opacity="0.55"/>
        <path d="M22 46 Q50 42 78 50" stroke="#386650" stroke-width="0.5" stroke-dasharray="1.5 2" opacity="0.55"/>
        <path d="M26 72 Q50 70 72 74" stroke="#386650" stroke-width="0.5" stroke-dasharray="1.5 2" opacity="0.55"/>
        <!-- Foot Silhouette -->
        <path d="M31 28 C23 36, 22 50, 26 66 C29 78, 28 92, 31 105 C34 116, 44 121, 53 119 C63 117, 69 107, 70 93 C71 78, 76 62, 78 46 C79 36, 73 29, 64 28 Z"
              fill="#F3ECE0" stroke="#2E5241" stroke-width="1.8"/>
        <!-- 5 Toes -->
        <ellipse cx="33" cy="17" rx="6.8" ry="9.5" transform="rotate(-6 33 17)" fill="#F3ECE0" stroke="#2E5241" stroke-width="1.6"/>
        <ellipse cx="46" cy="16" rx="4.5" ry="7.8" transform="rotate(-2 46 16)" fill="#F3ECE0" stroke="#2E5241" stroke-width="1.5"/>
        <ellipse cx="56.5" cy="18.5" rx="4.1" ry="7" transform="rotate(3 56.5 18.5)" fill="#F3ECE0" stroke="#2E5241" stroke-width="1.5"/>
        <ellipse cx="66" cy="22" rx="3.8" ry="6.2" transform="rotate(7 66 22)" fill="#F3ECE0" stroke="#2E5241" stroke-width="1.5"/>
        <ellipse cx="74.5" cy="27" rx="3.4" ry="5.2" transform="rotate(12 74.5 27)" fill="#F3ECE0" stroke="#2E5241" stroke-width="1.5"/>
        <!-- Subtle Anatomical Zone Shading -->
        <path d="M27 32 Q52 29 74 37 Q75 45 72 48 Q50 43 25 46 Z" fill="#386650" opacity="0.12"/>
        <circle cx="48" cy="43" r="4.5" fill="#B35D38" opacity="0.18"/>
        <ellipse cx="50" cy="102" rx="13" ry="12" fill="#B5873F" opacity="0.14"/>
      </svg>
    `;

    const handSvgMarkup = `
      <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Anatomical Hand Reflexology Map">
        <!-- Vertical Zone Guide Lines -->
        <line x1="22" y1="36" x2="32" y2="118" stroke="#C09348" stroke-width="0.4" stroke-dasharray="2 2" opacity="0.5"/>
        <line x1="38" y1="10" x2="42" y2="118" stroke="#C09348" stroke-width="0.4" stroke-dasharray="2 2" opacity="0.5"/>
        <line x1="50" y1="8" x2="50" y2="118" stroke="#C09348" stroke-width="0.4" stroke-dasharray="2 2" opacity="0.5"/>
        <line x1="62" y1="12" x2="58" y2="118" stroke="#C09348" stroke-width="0.4" stroke-dasharray="2 2" opacity="0.5"/>
        <line x1="74" y1="22" x2="66" y2="118" stroke="#C09348" stroke-width="0.4" stroke-dasharray="2 2" opacity="0.5"/>
        <!-- Palm & Fingers Silhouette -->
        <path d="M32 95 C26 84, 22 72, 16 61 C12 54, 15 48, 21 50 C26 52, 30 58, 33 63 L34 25 C34 19, 41 19, 41 25 L42 52 L45 18 C45 12, 53 12, 53 18 L53 52 L57 22 C57 16, 64 16, 64 22 L63 55 L68 31 C69 25, 76 27, 75 33 L71 74 C70 86, 65 95, 62 104 L35 104 Z"
              fill="#F3ECE0" stroke="#2E5241" stroke-width="1.8" stroke-linejoin="round"/>
        <!-- Diaphragm & Palm Lines -->
        <path d="M33 64 Q52 58 70 66" stroke="#386650" stroke-width="0.7" stroke-dasharray="2 2" opacity="0.6"/>
        <path d="M35 88 Q49 85 64 89" stroke="#B35D38" stroke-width="0.7" stroke-dasharray="2 2" opacity="0.6"/>
        <circle cx="48" cy="50" r="5" fill="#B35D38" opacity="0.16"/>
      </svg>
    `;

    function renderExplorer() {
      const baseSvg = currentMode === "foot" ? footSvgMarkup : handSvgMarkup;
      stageSvgContainer.innerHTML = baseSvg;

      // Add interactive hotspots
      data.reflexZones.forEach((zone, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "reflex-hotspot" + (idx === activeZoneIndex ? " active" : "");
        btn.style.left = (currentMode === "foot" ? zone.coordinates.footX : zone.coordinates.handX) + "%";
        btn.style.top = (currentMode === "foot" ? zone.coordinates.footY : zone.coordinates.handY) + "%";
        btn.textContent = String(idx + 1);
        btn.setAttribute("aria-label", `Inspect reflex zone ${idx + 1}: ${zone.name}`);
        btn.addEventListener("click", () => {
          activeZoneIndex = idx;
          renderExplorer();
        });
        stageSvgContainer.appendChild(btn);
      });

      // Render selector pills
      zoneListEl.innerHTML = "";
      data.reflexZones.forEach((zone, idx) => {
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = "zone-pill-btn" + (idx === activeZoneIndex ? " active" : "");
        pill.innerHTML = `
          <span class="zone-pill-num">${idx + 1}</span>
          <span>${zone.name}</span>
        `;
        pill.addEventListener("click", () => {
          activeZoneIndex = idx;
          renderExplorer();
        });
        zoneListEl.appendChild(pill);
      });

      // Update detail panel
      const activeZone = data.reflexZones[activeZoneIndex];
      if (activeZone) {
        if (detailBadge) detailBadge.textContent = activeZone.zoneNumber;
        if (detailTitle) detailTitle.textContent = activeZone.name;
        if (detailLocation) {
          const locText = currentMode === "foot" ? activeZone.footLocation : activeZone.handLocation;
          const modeLabel = currentMode === "foot" ? "Foot Reflex Map:" : "Hand Reflex Map:";
          detailLocation.innerHTML = `<strong>${modeLabel}</strong> ${locText}`;
        }
        if (detailBenefits) detailBenefits.textContent = activeZone.benefits;
      }
    }

    if (modeFootBtn && modeHandBtn) {
      modeFootBtn.addEventListener("click", () => {
        currentMode = "foot";
        modeFootBtn.classList.add("active");
        modeHandBtn.classList.remove("active");
        renderExplorer();
      });
      modeHandBtn.addEventListener("click", () => {
        currentMode = "hand";
        modeHandBtn.classList.add("active");
        modeFootBtn.classList.remove("active");
        renderExplorer();
      });
    }

    renderExplorer();
  }

  // 4. Filterable 20-Article Clinical Research Library (Front Page)
  function initResearchLibrary() {
    const gridEl = document.getElementById("research-articles-grid");
    const filterBtns = document.querySelectorAll("[data-research-filter]");
    if (!gridEl || !data.researchArticles) return;

    let currentCategory = "all";

    function renderArticles() {
      const filtered =
        currentCategory === "all"
          ? data.researchArticles
          : data.researchArticles.filter((a) => a.category === currentCategory);

      gridEl.innerHTML = filtered
        .map(
          (item) => `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="article-card">
          <div>
            <div class="article-card-source">${item.source}</div>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
          </div>
          <div class="article-card-footer">
            <span>Read Study / Article</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </a>
      `
        )
        .join("");
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-research-filter") || "all";
        renderArticles();
      });
    });

    renderArticles();
  }

  // 5. Interactive Session & Gift Certificate Estimator (Pricing Page)
  function initPricingEstimator() {
    const estimatorRoot = document.getElementById("session-estimator");
    if (!estimatorRoot || !data.pricing) return;

    const choiceBtns = estimatorRoot.querySelectorAll("[data-estimate-service]");
    const travelCheckbox = document.getElementById("estimate-travel-toggle");
    const oilsCheckbox = document.getElementById("estimate-oils-toggle");
    const giftCheckbox = document.getElementById("estimate-gift-toggle");

    const totalEl = document.getElementById("estimate-total-display");
    const breakdownEl = document.getElementById("estimate-breakdown-lines");
    const emailBtn = document.getElementById("estimate-email-cta");
    const smsBtn = document.getElementById("estimate-sms-cta");

    let selectedServiceId = "hand-foot-combo";

    function findService(id) {
      if (id === "group-party") {
        return {
          id: "group-party",
          displayTitle: "Group / Corporate / Party Event (2hr Min)",
          price: null,
          duration: "2+ Hours"
        };
      }
      return (
        data.pricing.services.find((s) => s.id === id) || {
          id: "hand-foot-combo",
          displayTitle: "Hand & Foot Complete Session",
          price: 90,
          duration: "75–90 Minutes"
        }
      );
    }

    function updateEstimate() {
      const svc = findService(selectedServiceId);
      const addTravel = travelCheckbox && travelCheckbox.checked;
      const addOils = oilsCheckbox && oilsCheckbox.checked;
      const isGift = giftCheckbox && giftCheckbox.checked;

      const travelFee = data.pricing.travelFee || 15;
      const lines = [];

      if (svc.price !== null) {
        lines.push({ label: svc.displayTitle, value: `$${svc.price}` });
      } else {
        lines.push({ label: svc.displayTitle, value: "Custom Quote" });
      }

      if (addOils) {
        lines.push({ label: "Zollinger Method Essential Oils", value: "Included ($0)" });
      }

      if (addTravel) {
        lines.push({ label: "Mobile / On-Site Travel Fee", value: `+$${travelFee}` });
      }

      if (isGift) {
        lines.push({ label: "Gift Certificate Presentation", value: "Included" });
      }

      let totalString = "Custom Quote";
      if (svc.price !== null) {
        const numericTotal = svc.price + (addTravel ? travelFee : 0);
        totalString = `$${numericTotal}`;
      }

      if (totalEl) totalEl.textContent = totalString;

      if (breakdownEl) {
        breakdownEl.innerHTML = lines
          .map(
            (l) => `
          <div class="summary-line">
            <span>${l.label}</span>
            <strong style="color: var(--text-on-dark);">${l.value}</strong>
          </div>
        `
          )
          .join("");
      }

      // Build pre-filled email & SMS links so booking is effortless
      const subject = encodeURIComponent(
        isGift
          ? `Gift Certificate Inquiry: ${svc.displayTitle}`
          : `Appointment Request: ${svc.displayTitle}`
      );
      const bodyLines = [
        `Hi Jean,`,
        ``,
        `I would like to inquire about booking with Wonderfully Made Reflexology:`,
        `• Service: ${svc.displayTitle} (${totalString})`,
        `• Essential Oils (Zollinger Method): ${addOils ? "Yes, please" : "No / Undecided"}`,
        `• Mobile Travel Session (+$15): ${addTravel ? "Yes" : "No (Studio session)"}`,
        isGift ? `• Gift Certificate: Yes, I would like to purchase a Gift Certificate` : null,
        ``,
        `My preferred days/times are: `,
        ``,
        `Thank you!`
      ]
        .filter((line) => line !== null)
        .join("\n");

      if (emailBtn && data.business) {
        emailBtn.setAttribute(
          "href",
          `mailto:${data.business.email}?subject=${subject}&body=${encodeURIComponent(bodyLines)}`
        );
      }
      if (smsBtn && data.business) {
        const smsText = `Hi Jean! I'd like to inquire about a ${svc.displayTitle} (${totalString})${
          isGift ? " Gift Certificate" : ""
        }.`;
        smsBtn.setAttribute("href", `${data.business.smsHref}?&body=${encodeURIComponent(smsText)}`);
      }
    }

    choiceBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        choiceBtns.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedServiceId = btn.getAttribute("data-estimate-service") || "hand-foot-combo";
        updateEstimate();
      });
    });

    [travelCheckbox, oilsCheckbox, giftCheckbox].forEach((input) => {
      if (input) input.addEventListener("change", updateEstimate);
    });

    // Also allow "Select Session" buttons on pricing cards to jump to estimator
    document.querySelectorAll("[data-select-tier]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const tierId = btn.getAttribute("data-select-tier");
        const matchingChoice = estimatorRoot.querySelector(`[data-estimate-service="${tierId}"]`);
        if (matchingChoice) {
          e.preventDefault();
          matchingChoice.click();
          estimatorRoot.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });

    updateEstimate();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    syncGlobalBindings();
    initReflexZoneExplorer();
    initResearchLibrary();
    initPricingEstimator();
  });
})();
