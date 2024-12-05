document.addEventListener('DOMContentLoaded', (event) => {
    const animatedText = document.querySelector('.animated-text');
    const texts = ['Creator.', 'Maker.', 'Educator.', 'Professional.'];
    let currentTextIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < texts[currentTextIndex].length) {
            animatedText.innerHTML += texts[currentTextIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 150); // Adjust the typing speed here
        } else {
            setTimeout(() => {
                charIndex = 0;
                animatedText.innerHTML = '';
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                typeEffect();
            }, 2000); // Adjust the delay before restarting the typing effect
        }
    }

    typeEffect();
});

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('open');
}
