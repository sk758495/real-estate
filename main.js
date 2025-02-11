// navbar radius
// Get the slider and the display element
const radiusSlider = document.getElementById('radius-slider');
const radiusValue = document.getElementById('radius-value');

// Update the displayed value when the slider is moved
radiusSlider.addEventListener('input', function() {
  radiusValue.textContent = radiusSlider.value + 'km';
});

// Select all the elements inside the About section that we want to animate
const aboutContent = document.querySelectorAll('#container-animation .row > div');

// Callback function for the Intersection Observer
const fadeInSlideUpStaggeredWithBounce = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Check if the entry is the image (for bounce effect)
            if (entry.target.classList.contains('image-section')) {
                entry.target.classList.add('bounce-up');
            } else {
                entry.target.classList.add('fade-in-slide-up');
            }

            // Set staggered delay based on index of the element
            entry.target.style.animationDelay = `${index * 0.2}s`;
        }
    });
};

// Create an Intersection Observer instance to observe the About content
const observer = new IntersectionObserver(fadeInSlideUpStaggeredWithBounce, {
    threshold: 0.1 // Trigger when at least 10% of the element is visible
});

// Observe each element inside the About section
aboutContent.forEach(item => {
    observer.observe(item);
});
