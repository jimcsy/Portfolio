const textElement = document.querySelector('.typing-text');
        // 1. EDIT THIS ARRAY to change the phrases you want to type
        const phrases = ["Computer Science Student", "Aspiring Software Developer"]; 

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100; // Speed of typing (lower is faster)

        function typeWriter() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                // Remove a character
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Deleting is faster
            } else {
                // Add a character
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Typing speed
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                // Finished typing the whole phrase, pause before deleting
                isDeleting = true;
                typeSpeed = 2000; // Pause for 2 seconds at the end
            } else if (isDeleting && charIndex === 0) {
                // Finished deleting, switch to next phrase
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Loop back to start
                typeSpeed = 500; // Pause briefly before starting new word
            }

            setTimeout(typeWriter, typeSpeed);
        }

        // Start the loop
        document.addEventListener('DOMContentLoaded', typeWriter);