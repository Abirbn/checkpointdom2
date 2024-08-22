document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('.colorbox');
    const bouton = document.querySelector('.change-color-btn');

    // Fonction qui génère une couleur aléatoire
    function getRandomColor() {
      
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }

    // Ajoute un écouteur d'événements au bouton
    bouton.addEventListener('click', function() {
    
        const color = getRandomColor();
       
        box.style.backgroundColor = color;
    });
});
