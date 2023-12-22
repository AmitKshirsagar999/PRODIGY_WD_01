document.addEventListener("scroll", function() {
    // Get the scroll position
    var scrollPosition = window.scrollY;

    // Get the menu element
    var menu = document.getElementById("main-menu");

    // Check if the scroll position is greater than a certain value
    if (scrollPosition > 80) { 
        // Add the fixed-menu class
        menu.classList.add("fixed-menu");
    } else {
        // Remove the fixed-menu class
        menu.classList.remove("fixed-menu");
    }
});
