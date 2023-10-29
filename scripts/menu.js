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
//working on the input search bar
// Get references to the input field and the results container
const input = document.getElementById("input");
const searchButton = document.querySelector(".search-btn");
const resultsContainer = document.querySelector(".search-results");

searchButton.addEventListener("click", function () {
    performSearch(input.value.toLowerCase());
});
// Add an input event listener to the input field
input.addEventListener("input", function () {
    // Get the search query from the input field
    const query = input.value.toLowerCase();

    // Perform your search logic here (e.g., search through an array of items)
    const searchResults = performSearch(query);

    // Display the search results
    displaySearchResults(searchResults);
});

function performSearch(query) {
    
    const items = [
        "Amala and Abula",
        "Plantain and Egg",
        "Eba and Egunsi",
        "Jollof Rice with Chicken",
        "Fried Rice",
        "Roasted Plantain",
        "Tea",
    ];

    // Filter items based on the query
    return items.filter((item) => item.toLowerCase().includes(query));
    resultsContainer.textContent = "Searching for: " + query;
}

// Display search results
function displaySearchResults(results) {
    // Clear the previous results
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        results.forEach((result) => {
            const resultItem = document.createElement("p");
            resultItem.textContent = result;
            resultsContainer.appendChild(resultItem);
        });
    }
}
