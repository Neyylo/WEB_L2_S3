const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentIndex = 1; // Commence sur premier slide réel
const totalSlides = slides.length;

// Initial position
slider.style.transform = `translateX(-${currentIndex * 68}%)`; // Ajuste pour refléter nouvelles dimensions

// Fonction pour afficher slide
function showSlide(index) {
    slider.style.transition = 'transform 1s ease-in-out';
    slider.style.transform = `translateX(-${index * 68}%)`; // Ajuste pour éviter couper image principale
    currentIndex = index;

    // Met à jour les classes pour images principales et secondaires
    updateSlideClasses(currentIndex);
    updateDots((currentIndex - 1 + totalSlides - 2) % (totalSlides - 2));
}

// Réinitialise position pour l'effet infini
slider.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
        slider.style.transition = 'none';
        currentIndex = totalSlides - 2;
        slider.style.transform = `translateX(-${currentIndex * 68}%)`;
    } else if (currentIndex === totalSlides - 1) {
        slider.style.transition = 'none';
        currentIndex = 1;
        slider.style.transform = `translateX(-${currentIndex * 68}%)`;
    }
});

// Met à jour classes pour images principales et secondaires
function updateSlideClasses(index) {
    slides.forEach((slide, i) => {
        const image = slide.querySelector('.slider-image');
        if (i === index) {
            // Image principale
            image.classList.add('main');
            image.classList.remove('secondary');
        } else if (i === (index + 1) % slides.length) {
            // Image secondaire (à droite)
            image.classList.add('secondary');
            image.classList.remove('main');
        } else {
            // Réinitialise autres images
            image.classList.remove('main', 'secondary');
        }
    });
}

// Met à jour points actifs
function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Fonction défilement automatique
function autoSlide() {
    showSlide(currentIndex + 1);
}

// Défilement automatique toutes 7 secondes
setInterval(autoSlide, 7000);

// Événements sur points navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index + 1);
    });
});
