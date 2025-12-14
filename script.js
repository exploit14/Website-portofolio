// ============ LOADING SCREEN ============
window.addEventListener("load", () => {
    const load = document.getElementById("loading-screen");
    setTimeout(() => {
        load.style.opacity = "0";
        setTimeout(() => load.style.display = "none", 400);
    }, 600);
});

// ============ SCROLL REVEAL ============
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));

// ============ SMOOTH SCROLL NAVBAR ============
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ============ DARK MODE ============
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ============ FOTO PROFIL ZOOM ============
const profileImg = document.getElementById("profileImage");

profileImg.addEventListener("click", () => {
    profileImg.classList.toggle("zoom");
});
