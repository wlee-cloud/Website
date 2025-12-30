document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.project-slider');
  const slides = slider.querySelector('.slides');
  const images = slider.querySelectorAll('.slides img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const dotsContainer = slider.querySelector('.dots');
  let index = 0;
  const total = images.length;

  function update() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function goTo(i) {
    index = (i + total) % total;
    update();
  }

  function nextSlide() { goTo(index + 1); }
  function prevSlide() { goTo(index - 1); }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  // 자동 슬라이드
  let auto = setInterval(nextSlide, 3000);
  slider.addEventListener('mouseenter', () => clearInterval(auto));
  slider.addEventListener('mouseleave', () => auto = setInterval(nextSlide, 3000));
});


// ===== BEFORE / AFTER SLIDER =====
document.addEventListener('DOMContentLoaded', () => {
  const baSlider = document.querySelector('.ba-slider');
  if (!baSlider) return; // 없는 경우 패스

  const baSlides = baSlider.querySelector('.ba-slides');
  const baImages = baSlider.querySelectorAll('.ba-slides img');
  const baPrev = baSlider.querySelector('.ba-prev');
  const baNext = baSlider.querySelector('.ba-next');
  const baDotsContainer = baSlider.querySelector('.ba-dots');
  let baIndex = 0;
  const baTotal = baImages.length;

  function updateSlide() {
    baSlides.style.transform = `translateX(-${baIndex * 100}%)`;
    baDots.forEach(dot => dot.classList.remove('active'));
    baDots[baIndex].classList.add('active');
  }

  function goToSlide(i) {
    baIndex = (i + baTotal) % baTotal;
    updateSlide();
  }

  function nextSlide() { goToSlide(baIndex + 1); }
  function prevSlide() { goToSlide(baIndex - 1); }

  baNext.addEventListener('click', nextSlide);
  baPrev.addEventListener('click', prevSlide);

  // 자동 슬라이드
  let auto = setInterval(nextSlide, 4000);
  baSlider.addEventListener('mouseenter', () => clearInterval(auto));
  baSlider.addEventListener('mouseleave', () => auto = setInterval(nextSlide, 4000));
});
