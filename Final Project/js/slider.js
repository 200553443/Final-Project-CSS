document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const captions = document.querySelectorAll('.image-caption');

        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });

        captions.forEach((caption, i) => {
            caption.style.opacity = i === index ? 1 : 0;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % 3;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + 3) % 3;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    // Add event listeners for next and previous buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
});
