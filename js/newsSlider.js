// À changer lorsqu'il y aura le bon format de slide
const slide_count = 9;
const width = 4687;
//const slide_count = document.getElementsByClassName("news_slider_elements").length
//const width = document.getElementById("news_slider").offsetWidth;

const slider = document.getElementById("news_slider");
const buttons = document.querySelectorAll("#news_slider_controls button");
const range = document.querySelector("#news_slider_controls input[type=range]");

let current_index = 0;

function slide(index) {
    if (index < 0) index = 0;
    else if (index >= slide_count) {index = slide_count};
    let next_index_percentage = index/slide_count;
    slider.style.transform = "translateX(-" + next_index_percentage * width * 0.9 + "px)";
    range.value = next_index_percentage * 100;
    current_index = index;
    console.log(next_index_percentage);
}

buttons?.forEach(button => {
    button.addEventListener('click', () => {
        let indexChange = +button.getAttribute("news_slider_change");
        slide(current_index + indexChange);
    });
})