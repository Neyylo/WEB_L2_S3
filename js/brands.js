// Récupère le slider, définie les variables.
const slider = document.querySelector('#brands_scrollbar');
let mouseDown = false;
let startX, scrollLeft;

/** Lorsque l'on commence à faire glisser le slider,
 *  cela veut dire que la souris a cliqué, donc
 *  récupère le décalage entre là où la souris a cliqué
 *  et le début du slider.
 */
let startDragging = function (event) {
    mouseDown = true;
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

/** Lorsque l'on arrête de faire glisser le slider,
 *  cela veut dire que la souris a arrêté de cliquer.
 */
let stopDragging = function (event) {
    mouseDown = false;
};

/** Lorsque le slider détecte que la souris a bougé,
 *  vérifie que le souris a cliqué,
 *  si oui, on récupère la position de la souris par rapport au slider,
 *  et on définit le scroll du slider en fonction de la nouvelle position de la souris.
 */
slider.addEventListener('mousemove', (e) => {
    if(!mouseDown) {
        return;
    }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
});

// Lorsqu'on clique sur le slider, on commence à le faire glisser.
slider.addEventListener('mousedown', startDragging, false);
// Lorsqu'on arrête de cliquer sur le slider, on arrête de le faire glisser.
slider.addEventListener('mouseup', stopDragging, false);
// Lorsqu'on quitte la zone du slider, on arrête aussi de le faire glisser.
slider.addEventListener('mouseleave', stopDragging, false);
