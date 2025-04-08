// JavaScript for dynamic typing effect
const typingElement = document.querySelector('.typing');
const words = [' Web Developer', 'GIM Developer', ' Web Designer', ' Front End', ' Back End'];
let wordIndex = 0;
let letterIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentText = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        currentText = words[wordIndex].substring(0, letterIndex + 1);
        letterIndex++;
    }

    typingElement.textContent = currentText;

    if (!isDeleting && letterIndex === words[wordIndex].length) {
        setTimeout(() => isDeleting = true, 2000); // Start deleting after 2 seconds
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    }

    setTimeout(type, isDeleting ? 100 : 150);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, 500);
});
