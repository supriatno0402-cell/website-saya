

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



window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transform = "scale(1.1)";
    loader.style.transition = "0.6s";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }, 1200);
});


document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let rotateX = (y / card.offsetHeight - 0.5) * 10;
    let rotateY = (x / card.offsetWidth - 0.5) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});



// ambil semua elemen yang mau dikasih ripple
const rippleTargets = document.querySelectorAll(".btn, .menu a, .card");

rippleTargets.forEach(el => {
  el.classList.add("ripple-effect");

  el.addEventListener("click", function(e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple-span");

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    circle.style.width = circle.style.height = size + "px";
    circle.style.left = (e.clientX - rect.left - size / 2) + "px";
    circle.style.top = (e.clientY - rect.top - size / 2) + "px";

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});



// target semua yang bisa diklik

const clickSound = document.getElementById("clickSound");

document.querySelectorAll("button, .btn, .menu a").forEach(el => {
  el.addEventListener("click", function(e) {

    // PLAY SOUND
    clickSound.currentTime = 0;
    clickSound.play();

    // RIPPLE
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
if (navigator.vibrate) {
  navigator.vibrate(30);
}

// =======================
// 3D TEXT EFFECT
// =======================
const text3D = document.getElementById("typing");

if (text3D) {

  document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 25;
    let y = (window.innerHeight / 2 - e.clientY) / 25;

    text3D.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  // glow saat hover
  text3D.addEventListener("mouseenter", () => {
    text3D.classList.add("glow");
  });

  text3D.addEventListener("mouseleave", () => {
    text3D.classList.remove("glow");
    text3D.style.transform = "rotateX(0) rotateY(0)";
  });

}