const slider = document.getElementById("news_slider");
const slides = document.getElementsByClassName("news_slides");
const slide_count = slides.length - 1;
const width = slider.offsetWidth;
const buttons = document.querySelectorAll("#news_slider_controls button");
const range = document.querySelector("#news_slider_controls input[type=range]");

let current_index = 0;

function slide(index) {
    if (index < 0) index = 0;
    else if (index >= slide_count) index = slide_count;
    slider.style.transform = "translateX(-" + index/(slide_count+1) * width + "px)";
    range.value = index/slide_count * 100;
    current_index = index;
}

buttons?.forEach(button => {
    button.addEventListener('click', () => {
        let indexChange = +button.getAttribute("news_slider_change");
        slide(current_index + indexChange);
    });
})

for (let i = 0; i <= slide_count; i++) {
    let img = slides[i]?.getAttribute("data-img-url");
    if (img !== undefined) slides[i].style.backgroundImage = `url(${img})`;
}