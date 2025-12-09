// Handle collapsible project cards on mobile
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Start collapsed on mobile
        if (window.innerWidth < 900) {
            card.classList.add('collapsed');
        }

        card.addEventListener('click', () => {
            // Only toggle on mobile
            if (window.innerWidth < 900) {
                card.classList.toggle('collapsed');
            }
        });
    });

    // Handle resize - expand all on larger screens
    window.addEventListener('resize', () => {
        projectCards.forEach(card => {
            if (window.innerWidth >= 900) {
                card.classList.remove('collapsed');
            }
        });
    });
});
