let food1 = document.getElementById("food1");
let food2 = document.getElementById("food2");
let foods = document.getElementById("foods");

food1.addEventListener("click", () => {
    foods.style.backgroundImage = "url('/images/jollf_rice1.jpeg')";
});

food2.addEventListener("click", () => {
    foods.style.backgroundImage = "url('/images/jollof_with_chicken.jpeg')";
});