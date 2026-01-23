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
  const slider = track.parentElement;
   const logos = track.innerHTML;

  // ✅ 로고들을 두세트 이상 이어붙여서 무한 루프처럼 보이게
  track.innerHTML = logos + logos + logos + logos + logos; 

  // ✅ clone 생성
  const clone = track.cloneNode(true);
  slider.appendChild(clone);

  // ✅ 두 트랙 사이 간격 추가
  const gap = 120; // 로고 사이 gap과 동일하게 유지
  const trackWidth = Math.round(track.getBoundingClientRect().width);

  // ✅ clone 위치 지정
  clone.style.position = "absolute";
  clone.style.left = `${trackWidth + gap}px`; // 👈 여기가 핵심!
  clone.style.top = "0";

  // ✅ 애니메이션
  let position = 0;
  const speed = 0.1; // 속도 조절

  function animate() {
    position -= speed;

    // 한 트랙이 완전히 지나가면 리셋
    if (Math.abs(position) >= trackWidth + gap) {
      position = 0;
    }

    const translateValue = Math.round(position);
    track.style.transform = `translateX(${translateValue}px)`;
    clone.style.transform = `translateX(${translateValue}px)`;

    requestAnimationFrame(animate);
  }

  animate();
});
