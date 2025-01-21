// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleHours');
    const dropdown = document.getElementById('hoursDropdown');

    if (toggleButton && dropdown) {
        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            } else {
                dropdown.classList.add('show');
            }
        });

        // Fermer en cliquant ailleurs
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target) && !toggleButton.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
    }
});
