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
    document.getElementById('classroom-projects-link').addEventListener('click', function () {
        showPage('classroom-projects', this);
    });
};
