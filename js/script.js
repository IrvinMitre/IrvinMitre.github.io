if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-btn.prev');
const nextButton = document.querySelector('.slider-btn.next');

let currentIndex = 0;
const slideInterval = 5000; // Intervalo en milisegundos

// Move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
}

// Move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
}

// Update the slider's position
function updateSliderPosition() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatic sliding
let autoSlide = setInterval(nextSlide, slideInterval);

// Pause slider on hover
document.querySelector('.image-slider').addEventListener('mouseenter', () => {
  clearInterval(autoSlide);
});

document.querySelector('.image-slider').addEventListener('mouseleave', () => {
  autoSlide = setInterval(nextSlide, slideInterval);
});

// Event listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
