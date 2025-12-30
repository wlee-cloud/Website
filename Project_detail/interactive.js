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
