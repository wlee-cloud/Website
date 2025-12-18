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

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".logo-track");
  const clone = track.cloneNode(true); // 트랙 전체 복제
  track.parentElement.appendChild(clone); // 바로 뒤에 복제 추가

  // 두 트랙이 자연스럽게 이어지도록 스타일 조정
  clone.style.position = "absolute";
  clone.style.left = `${track.scrollWidth}px`;

  // 애니메이션 프레임 루프
  let position = 0;
  const speed = 0.5; // ← ✅ 속도 조절 (숫자가 클수록 빠름)

  function animate() {
    position -= speed;
    if (Math.abs(position) >= track.scrollWidth) position = 0;

    track.style.transform = `translateX(${position}px)`;
    clone.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);
  }

  animate();
});
