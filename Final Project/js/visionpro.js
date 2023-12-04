// visionpro.js

function openDetail(detailName) {
    // Hide all accordions
    var accordions = document.querySelectorAll('.accordion');
    accordions.forEach(function (accordion) {
        accordion.style.display = 'none';
    });

    // Show the selected accordion
    var selectedAccordion = document.getElementById(detailName);
    if (selectedAccordion) {
        selectedAccordion.style.display = 'block';
    }
}
