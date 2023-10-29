// showing navbar when click menu on mobile view
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", function() {
    menuToggle.classList.toggle("is-active");
    sidebar.classList.toggle("active")
});
// close menu when clicked
sidebar.addEventListener("click", function() {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
        menuToggle.classList.toggle("is-active");
        sidebar.classList.toggle("active")
    }
});

// move the menu bar right and left when clicked back and next
let step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(event) {
    event.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(event) {
    event.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

//when click back and next on the menu filters.
$(".back-menus").bind("click", function(event) {
    event.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".next-menus").bind("click", function(event) {
    event.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
});

// big screen responsiveness
// when the back and next icon is clicked, it shoud move to the next
