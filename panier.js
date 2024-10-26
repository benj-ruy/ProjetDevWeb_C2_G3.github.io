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


document.addEventListener('DOMContentLoaded', () => {
    const panier = document.getElementById('panier');
    let foodsPanier = [...panier.getElementsByClassName('food-panier')];

    
    const updateTotalPrice = () => {
        let prixTotal = 0;
        foodsPanier.forEach((foodPanier) => {
            let quantite = parseInt(foodPanier.getElementsByClassName('quantité')[0].value, 10);
            let prix = parseFloat(foodPanier.getElementsByClassName('prix')[0].textContent.replace(',', '.'));
            let total = quantite * prix;
            foodPanier.getElementsByClassName('prix')[1].textContent = total.toFixed(2);
            prixTotal += total;
        });

        let tva = prixTotal * 0.1;
        let frais_livraison = prixTotal * 0.01;
        let total = prixTotal + tva + frais_livraison;
        document.getElementById('sous-total').children[1].textContent = prixTotal.toFixed(2);
        document.getElementById('TVA').children[1].textContent = tva.toFixed(2);
        document.getElementById('frais_livraison').children[1].textContent = frais_livraison.toFixed(2);
        document.getElementById('total').children[1].textContent = total.toFixed(2);
    };

    foodsPanier.forEach((foodPanier) => {
        const quantite = foodPanier.querySelector('.quantité');
        quantite.addEventListener('change', updateTotalPrice);
    });


    foodsPanier.forEach((foodPanier) => {
        const supprimer = foodPanier.querySelector('.supprimer');
        supprimer.addEventListener('click', () => {
            foodPanier.remove();
            foodsPanier = [...panier.getElementsByClassName('food-panier')];
            updateTotalPrice();
        });
    });

    updateTotalPrice();
});

document.getElementById('payer').addEventListener('click', () => {
    alert('Une erreur interne est survenue durant le paiement. Veuillez reessayer plus tard.');
});
