// Slide Index Tracker
let currentIndex = 0;

// Function to Go to Specific Slide
function goToSlide(index) {
  const slider = document.getElementById("slider");
  const totalSlides = slider.children.length;

  if (index >= 0 && index < totalSlides) {
    currentIndex = index;
    // Shift the slider to the related slide
    slider.style.transform = `translateX(-${100 * index}%)`;
  }
}
