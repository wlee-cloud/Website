document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.project-slider');
  const slides = slider.querySelector('.slides');
  const images = slider.querySelectorAll('.slides img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const dotsContainer = slider.querySelector('.dots');
  let index = 0;
  const total = images.length;

  // 점(dot) 생성
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll('button');

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
