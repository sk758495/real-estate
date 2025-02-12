document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");

  function revealSteps() {
    steps.forEach((step) => {
      const stepTop = step.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (stepTop < windowHeight - 50) {
        step.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSteps);
  revealSteps(); // Run initially in case steps are already visible
});


// counter
AOS.init({ duration: 1000 });

    function animateCounter(counter) {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 100;

        function updateCounter() {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        }

        updateCounter();
    }

    function checkScroll() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && !counter.classList.contains('started')) {
                counter.classList.add('started');
                animateCounter(counter);
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();