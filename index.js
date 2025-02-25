window.onload = function () {
    function showPage(pageId, element) {
        // Hide all sections
        document.querySelectorAll('.content div').forEach(div => div.classList.remove('active'));

        // Show selected section
        document.getElementById(pageId).classList.add('active');

        // Remove active class from all menu items
        document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));

        // Add active class to clicked menu item
        element.classList.add('active');
    }

    // Attach event listeners
    document.getElementById('welcome-link').addEventListener('click', function () {
        showPage('welcome', this);
    });
    document.getElementById('personal-projects-link').addEventListener('click', function () {
        showPage('personal-projects', this);
    });
    document.getElementById('school-projects-link').addEventListener('click', function () {
        showPage('school-projects', this);
    });
    document.getElementById('technologies-link').addEventListener('click', function () {
        showPage('tech', this);
    });
};

let index = 0;
    const slides = document.querySelectorAll(".carousel img");
    const totalSlides = slides.length;
    const carousel = document.querySelector(".carousel");

    function showSlide() {
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide();
    }

document.getElementById("return-link").addEventListener("click", function() {
    window.location.href = "index.html#personal-projects";
});