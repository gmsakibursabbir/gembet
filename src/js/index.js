window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  // Add animation class
  preloader.classList.add("hide-preloader");

  // Fade in content
  // content.classList.remove('opacity-0');

  // Fully remove preloader after animation
  setTimeout(() => {
    preloader.remove(); // Or use: preloader.style.display = 'none';
    document.body.classList.remove("overflow-hidden");
  }, 800); // Match animation duration
});
//Header

// Reusable Dropdown Logic
document.addEventListener("click", function (e) {
  const isDropdownBtn = e.target.closest("[data-dropdown]");
  const isInsideDropdown = e.target.closest(".dropdown");
  const allMenus = document.querySelectorAll(".dropdown-menu");

  if (isDropdownBtn) {
    const parent = isDropdownBtn.closest(".dropdown");
    const menu = parent.querySelector(".dropdown-menu");

    allMenus.forEach((m) => {
      if (m !== menu) m.classList.remove("show");
    });

    menu.classList.toggle("show");
  } else if (!isInsideDropdown) {
    allMenus.forEach((m) => m.classList.remove("show"));
  }
});

// Mobile Menu Toggle
const mobileToggleBtn = document.querySelector("[data-mobile-menu-toggle]");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobileBtn = document.querySelector("[data-close-mobile]");

mobileToggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("offcanvas-open");
});

closeMobileBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("offcanvas-open");
});
// swiper
var reviewsswiper = new Swiper(".reviewSwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000, // time between slides (ms)
    disableOnInteraction: false, // continue autoplay after user swipe
  },
  pagination: {
    el: ".custom-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 1.5,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 2.2,
      centeredSlides: false,
    },
  },
});
// swiper claimSwiper
var claimwsswiper = new Swiper(".claimSwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000, // time between slides (ms)
    disableOnInteraction: false, // continue autoplay after user swipe
  },
  pagination: {
    el: ".custom-pagination-claim",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 1.5,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 2.2,
      centeredSlides: false,
    },
  },
});

// swiper hdSwiper
var hdwsswiper = new Swiper(".hdSwiper", {
  loop: true,
  spaceBetween: 4,
  autoplay: {
    delay: 3000, // time between slides (ms)
    disableOnInteraction: false, // continue autoplay after user swipe
  },
  pagination: {
    el: ".custom-pagination-hd",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
  breakpoints: {
    0: {
      slidesPerView: 3.3,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 3.2,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 2.2,
    },
  },
});
// swiper whoSwiper
var whowsswiper = new Swiper(".whoSwiper", {
  loop: true,
  autoplay: {
    delay: 3000, // time between slides (ms)
    disableOnInteraction: false, // continue autoplay after user swipe
  },
  spaceBetween: 4,
  pagination: {
    el: ".custom-pagination-who",
    clickable: true,
    bulletClass: "swiper-pagination-bullet-cst",
    bulletActiveClass: "swiper-pagination-bullet-active-cst",
  },
  breakpoints: {
    0: {
      slidesPerView: 3.2,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 5.2,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 2.2,
      centeredSlides: false,
    },
  },
});
// swiper trustSwiper
var trustswiper = new Swiper(".trustSwiper", {
  loop: true,
  autoplay: {
    delay: 3000, // time between slides (ms)
    disableOnInteraction: false, // continue autoplay after user swipe
  },
  spaceBetween: 4,
  pagination: {
    el: ".custom-pagination-trust",
    clickable: true,
    bulletClass: "swiper-pagination-bullet-csttwo",
    bulletActiveClass: "swiper-pagination-bullet-active-csttwo",
  },
  breakpoints: {
    0: {
      slidesPerView: 3.2,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 5.2,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 2.2,
      centeredSlides: false,
    },
  },
});

// tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");

    // Remove active styles
    tabButtons.forEach((b) => b.classList.remove("active-tab"));
    btn.classList.add("active-tab");

    // Show correct content
    tabPanes.forEach((pane) => {
      pane.classList.add("hidden");
      if (pane.getAttribute("data-tab-content") === target) {
        pane.classList.remove("hidden");
      }
    });
  });
});

//faq
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".faq-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector("svg");
      const isOpen = content.classList.contains("max-h-40");

      document.querySelectorAll(".faq-content").forEach((c) => {
        c.classList.remove("max-h-40", "py-2");
      });

      document.querySelectorAll(".faq-icon").forEach((i) => {
        i.classList.remove("rotate-180");
      });

      if (!isOpen) {
        content.classList.add("max-h-40", "py-2");
        icon.classList.add("rotate-180");
      }
    });
  });
});

// modal

document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll(".open-modal");
  const modals = document.querySelectorAll(".modal");

  openButtons.forEach((button) => {
    const targetId = button.dataset.modalTarget;
    const modal = document.getElementById(targetId);
    const overlay = modal.querySelector(".modal-overlay");
    const content = modal.querySelector(".modal-content");
    const closeBtn = modal.querySelector(".close-modal");

    // Open Modal
    button.addEventListener("click", () => {
      modal.classList.remove("hidden");
      setTimeout(() => {
        overlay.classList.add("opacity-100");
        content.classList.add("opacity-100", "scale-100");
        content.classList.remove("scale-95");
      }, 10);
    });

    // Close Modal
    const closeModal = () => {
      overlay.classList.remove("opacity-100");
      content.classList.remove("opacity-100", "scale-100");
      content.classList.add("scale-95");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300);
    };

    overlay.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  });
});

// scroll top
const scrollBtn = document.getElementById("scrollTopBtn");

// Show/hide logic on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.remove("opacity-0", "pointer-events-none");
    scrollBtn.classList.add("opacity-100");
  } else {
    scrollBtn.classList.add("opacity-0", "pointer-events-none");
    scrollBtn.classList.remove("opacity-100");
  }
});

// Scroll to top on click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// alert
window.addEventListener("DOMContentLoaded", () => {
  const alertBox = document.getElementById("info-alart");
  const closeBtn = document.getElementById("close-alart");

  // Show after slight delay (e.g. 1s)
  setTimeout(() => {
    alertBox.classList.remove("hidden");

    // Force reflow to restart transition
    void alertBox.offsetWidth;

    alertBox.classList.remove("opacity-0", "-translate-y-2");
    alertBox.classList.add("opacity-100", "translate-y-0");
  }, 1000); // show after 1 second

  // Auto close after 10s
  const autoClose = setTimeout(() => {
    closeAlert();
  }, 16000); // 1s delay + 10s = 11s

  // Close on click
  closeBtn.addEventListener("click", () => {
    clearTimeout(autoClose);
    closeAlert();
  });

  function closeAlert() {
    alertBox.classList.remove("opacity-100", "translate-y-0");
    alertBox.classList.add("opacity-0", "-translate-y-2");

    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 500); // match with duration-500
  }
});
