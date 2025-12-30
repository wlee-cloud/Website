document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.project-slider');
  const slides = slider.querySelector('.slides');
  const images = slider.querySelectorAll('.slides img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const dotsContainer = slider.querySelector('.dots');
  let index = 0;
  const total = images.length;

  // 자동 슬라이드
  let auto = setInterval(nextSlide, 3000);
  slider.addEventListener('mouseenter', () => clearInterval(auto));
  slider.addEventListener('mouseleave', () => auto = setInterval(nextSlide, 3000));
});
