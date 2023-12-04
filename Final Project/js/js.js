$(document).ready(function() {
    // Load header content
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            $("#header").html(data);
        });
    // Load footer content
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            $("#footer").html(data);
        });
});