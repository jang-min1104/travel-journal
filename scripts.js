
const gallerySlider = document.getElementById('gallerySlider');
const totalSlides = gallerySlider.children.length;
let currentIndex = 0;

function slideGallery(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  gallerySlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
