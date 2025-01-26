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
// Tiret de la barre de progression du slider
const news_dash = document.querySelector("#news_slider_controls_dash");
// Fond du tiret de la barre de progression du slider
const news_filler = document.querySelector("#news_slider_controls_filler");

// Indice de la slide actuelle
let news_current_index = 0;

// Change la largeur du trait pour s'adapter au nombre de slide
news_dash.style.width = 100/(news_slide_count+1) + "%";

/**
 * Translate le slider jusqu'à l'indice en fonction du nombre de slides et de sa largeur
 * et translate également le trait de progression jusqu'à la prochaine position.
 * @param index indice de la slide à laquelle glisser
 */
function slide(index) {
    if (index < 0) index = 0;
    else if (index >= news_slide_count) index = news_slide_count;
    news_slider.style.transform = "translateX(-" + index/(news_slide_count+1) * news_width + "px)";
    news_dash.style.transform = "translateX(" + news_filler.offsetWidth * index/(news_slide_count+1) + "px)";
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
