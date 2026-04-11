const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');
const items = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');

let currentSlideIndex = 0;
const slidesCount = items.length;

function activateSlide(index) {
  items[currentSlideIndex].classList.remove('slider__item_active');
  dots[currentSlideIndex].classList.remove('slider__dot_active');

  currentSlideIndex = index;

  items[currentSlideIndex].classList.add('slider__item_active');
  dots[currentSlideIndex].classList.add('slider__dot_active');
}

nextArrow.addEventListener('click', () => {
  const newIndex = (currentSlideIndex + 1) % slidesCount;
  activateSlide(newIndex);
});

prevArrow.addEventListener('click', () => {
  const newIndex = (currentSlideIndex - 1 + slidesCount) % slidesCount;
  activateSlide(newIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    activateSlide(index);
  });
});

dots[0].classList.add('slider__dot_active');
