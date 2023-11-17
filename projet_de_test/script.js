// Récupérer tous les boutons avec la classe "addToCartBtn"
var addToCartButtons = document.querySelectorAll('.addToCartBtn');

// Ajouter un gestionnaire d'événements pour chaque bouton
addToCartButtons.forEach(function (button) {
    button.addEventListener('mouseover', function () {
        // Changer la couleur au survol
        button.style.backgroundColor = '#ffcc00';
    });

    button.addEventListener('mouseout', function () {
        // Revenir à la couleur d'origine lorsque le curseur quitte le bouton
        button.style.backgroundColor = '#4285f4';
    });
});
