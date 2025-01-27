document.addEventListener('DOMContentLoaded', function () {
    // Menu des horaires
    const toggleButton = document.getElementById('toggleHours');
    const dropdown = document.getElementById('hoursDropdown');

    if (toggleButton && dropdown) {
        toggleButton.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });

        // Fermer le dropdown en cliquant ailleurs
        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target) && !toggleButton.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
    }

    // Barre de recherche
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');

    if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', function () {
            // Ajoute/retire la classe 'expanded' pour afficher/masquer la barre
            if (searchInput.classList.contains('expanded')) {
                searchInput.classList.remove('expanded');
            } else {
                searchInput.classList.add('expanded');
                searchInput.focus(); // Met le focus sur la barre de recherche
            }
        });
    }
});
