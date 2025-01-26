// Slider
const news_slider = document.getElementById("news_slider");
// Slides du slider
const news_slides = document.getElementsByClassName("news_slides");
// Nombre de slides que l'on peut glisser
const news_slide_count = news_slides.length - 1;
// Taille du slider
const news_width = news_slider.offsetWidth;
// Flèches de contrôle du slider
const news_buttons = document.querySelectorAll("#news_slider_controls button");
// Barre de progression du slider
const news_range = document.querySelector("#news_slider_controls input[type=range]");

// Indice de la slide actuelle
let news_current_index = 0;

/**
 * Translate le slider jusqu'à l'indice en fonction du nombre de slides et de sa largeur
 * @param index indice de la slide à laquelle glisser
 */
function slide(index) {
    if (index < 0) index = 0;
    else if (index >= news_slide_count) index = news_slide_count;
    news_slider.style.transform = "translateX(-" + index/(news_slide_count+1) * news_width + "px)";
    news_range.value = index/news_slide_count * 100;
    news_current_index = index;
}

/*
    Pour chaque clic sur une flèche, récupérer la direction
    dans laquelle il doit faire glisser le slider
    puis faire glisser le slider jusqu'à la prochaine slide
 */
news_buttons?.forEach(button => {
    button.addEventListener('click', () => {
        let indexChange = +button.getAttribute("news_slider_change");
        slide(news_current_index + indexChange);
    });
})

/*
    Pour chaque slide, récupérer l'url de son image de fond
    et lui attribuer le style correspondant
 */
for (let i = 0; i <= news_slide_count; i++) {
    let img = news_slides[i]?.getAttribute("data-img-url");
    if (img !== undefined) news_slides[i].style.backgroundImage = `url(${img})`;
}