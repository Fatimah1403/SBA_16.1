let food1 = document.getElementById("food1");
let food2 = document.getElementById("food2");
let food3 = document.getElementById("food3");
let food4 = document.getElementById("food4");

let foods = document.getElementById("foods");

food1.addEventListener("click", () => {
    foods.style.backgroundImage = "url('/images/jollf_rice1.jpeg')";
});

food2.addEventListener("click", () => {
    foods.style.backgroundImage = "url('/images/amala_efo.jpeg')";
});