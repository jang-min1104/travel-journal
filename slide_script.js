
const gallerySlider = document.getElementById('gallerySlider');
let currentIndex = 0;

function slideGallery(direction) {
  const totalSlides = gallerySlider.children.length;
  console.log(`총 슬라이드: ${totalSlides}, 현재 인덱스: ${currentIndex}`);

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;
  gallerySlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
