// Get the parent element containing all food items
let menu = document.querySelector('.menu');

// Function to change the background image when a food item is clicked
function changeBackground(imageUrl) {
    foods.style.backgroundImage = `url('${imageUrl}')`;
}

// Event listener for the menu items
menu.addEventListener('click', function(event) {
    // Check if the clicked element is a food item (food1, food2, food3, food4)
    if (event.target.id === 'food1') {
        changeBackground('/images/roasted_plantain.jpeg');
    } else if (event.target.id === 'food2') {
        changeBackground('/images/amala_efo.jpeg');
    } else if (event.target.id === 'food3') {
        changeBackground('/images/spag_dodo_egg.jpeg');
    } else if (event.target.id === 'food4') {
        changeBackground('/images/fufu_efo.jpeg');
    }
});

// let food1 = document.getElementById("food1");
// let food2 = document.getElementById("food2");
// let food3 = document.getElementById("food3");
// let food4 = document.getElementById("food4");

// let foods = document.getElementById("foods");

// food1.addEventListener("click", () => {
//     foods.style.backgroundImage = "url('/images/roasted_plantain.jpeg')";
// });

// food2.addEventListener("click", () => {
//     foods.style.backgroundImage = "url('/images/amala_efo.jpeg')";
// });
// food3.addEventListener("click", () => {
//     foods.style.backgroundImage = "url('/images/spag_dodo_egg.jpeg')";
// });
// food4.addEventListener("click", () => {
//     foods.style.backgroundImage = "url('/images/fufu_efo.jpeg')";
// });
