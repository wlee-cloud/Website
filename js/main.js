// Navbar scroll shadow
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

// Language Switcher
const enBtn = document.getElementById("lang-en");
const krBtn = document.getElementById("lang-kr");
const navLinks = document.querySelectorAll(".nav-menu a");

function switchLanguage(lang) {
  navLinks.forEach(link => {
    link.textContent = link.getAttribute(`data-${lang}`);
  });
  if (lang === "en") {
    enBtn.classList.add("active");
    krBtn.classList.remove("active");
  } else {
    krBtn.classList.add("active");
    enBtn.classList.remove("active");
  }
}

enBtn.addEventListener("click", () => switchLanguage("en"));
krBtn.addEventListener("click", () => switchLanguage("kr"));

// ===== Disciplines Hover Image Change =====
const disciplineItems = document.querySelectorAll(".discipline-list li");
const previewImage = document.getElementById("disciplinePreview");
const previewContainer = document.querySelector(".image-preview");

disciplineItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const newSrc = item.getAttribute("data-image");

    // 이미지 페이드 애니메이션
    previewContainer.classList.add("fade");
    setTimeout(() => {
      previewImage.src = newSrc;
      previewContainer.classList.remove("fade");
    }, 200);

    // 현재 선택 항목 스타일링
    disciplineItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

