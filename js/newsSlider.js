// Slider
const slider = document.getElementById("news_slider");
// Slides du slider
const slides = document.getElementsByClassName("news_slides");
// Nombre de slides que l'on peut glisser
const slide_count = slides.length - 1;
// Taille du slider
const width = slider.offsetWidth;
// Flèches de contrôle du slider
const buttons = document.querySelectorAll("#news_slider_controls button");
// Barre de progression du slider
const range = document.querySelector("#news_slider_controls input[type=range]");

// Indice de la slide actuelle
let current_index = 0;

/**
 * Translate le slider jusqu'à l'indice en fonction du nombre de slides et de sa largeur
 * @param index indice de la slide à laquelle glisser
 */
function slide(index) {
    if (index < 0) index = 0;
    else if (index >= slide_count) index = slide_count;
    slider.style.transform = "translateX(-" + index/(slide_count+1) * width + "px)";
    range.value = index/slide_count * 100;
    current_index = index;
}

/*
    Pour chaque clic sur une flèche, récupérer la direction
    dans laquelle il doit faire glisser le slider
    puis faire glisser le slider jusqu'à la prochaine slide
 */
buttons?.forEach(button => {
    button.addEventListener('click', () => {
        let indexChange = +button.getAttribute("news_slider_change");
        slide(current_index + indexChange);
    });
})

/*
    Pour chaque slide, récupérer l'url de son image de fond
    et lui attribuer le style correspondant
 */
for (let i = 0; i <= slide_count; i++) {
    let img = slides[i]?.getAttribute("data-img-url");
    if (img !== undefined) slides[i].style.backgroundImage = `url(${img})`;
}