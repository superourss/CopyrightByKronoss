// Assurez-vous d'avoir inclus confetti.min.js dans votre fichier HTML

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');

    logo.addEventListener('mouseover', function() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#009FFF', '#0E4E8E']
        });
    });
});
