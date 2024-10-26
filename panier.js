const scrollContainer = document.querySelector('.recommandation-container');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');

const foodCards = document.querySelectorAll('.food-card');
const scrollDistance = foodCards[1].getBoundingClientRect().x - foodCards[0].getBoundingClientRect().x;

// Fonction de défilement vers la gauche
scrollLeftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -scrollDistance,
        behavior: 'smooth'
    });
});

// Fonction de défilement vers la droite
scrollRightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: scrollDistance,
        behavior: 'smooth'
    });
});


