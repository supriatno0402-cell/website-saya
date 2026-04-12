

// =======================
// HAMBURGER MENU
// =======================
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
  document.getElementById("hamburger").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("show");
}


// =======================
// DARK MODE
// =======================
function toggleDark() {
  document.body.classList.toggle("dark");

  let icon = document.getElementById("darkIcon");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
    icon.innerHTML = "☀️";
  } else {
    localStorage.setItem("mode", "light");
    icon.innerHTML = "🌙";
  }
}


// =======================
// SAAT HALAMAN DIBUKA
// =======================
document.addEventListener("DOMContentLoaded", function() {

  // DARK MODE LOAD
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    document.getElementById("darkIcon").innerHTML = "☀️";
  }

  // LOADER FIX (ANTI STUCK)
  const loader = document.getElementById("loader");
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.transition = "0.5s";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  }, 1000);

  // TYPING EFFECT
  const text = "Selamat Datang di Website Saya";
  let i = 0;

  function typing() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }

  if (document.getElementById("typing")) {
    typing();
  }

  // ACTIVE MENU
  const links = document.querySelectorAll(".menu a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // RIPPLE EFFECT
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = link.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";

      link.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

});


// =======================
// ANIMASI SCROLL
// =======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => {
  observer.observe(el);
});


// =======================
// NAVBAR HIDE + SCROLL EFFECT
// =======================
let lastScroll = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset;
  let navbar = document.querySelector(".navbar");

  // hide saat scroll bawah
  if (currentScroll > lastScroll) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  // efek background scroll
  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});


// =======================
// CARD 3D EFFECT
// =======================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});


// =======================
// PARALLAX
// =======================
window.addEventListener("scroll", function() {
  const bg = document.getElementById("parallax");
  if (bg) {
    bg.style.transform = "translateY(" + window.scrollY * 0.3 + "px)";
  }
});
