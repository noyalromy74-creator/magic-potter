const cursor = document.getElementById('magic-cursor');
const starsContainer = document.getElementById('stars-container');

// 1. Mouse Move Event for Magic Cursor Trail
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Expand cursor size on card hover
const card = document.querySelector('.house-card');
card.addEventListener('mouseenter', () => {
    cursor.style.width = '50px';
    cursor.style.height = '50px';
});
card.addEventListener('mouseleave', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
});

// 2. Generate Random Background Stars (Constellation Effect)
function createStars() {
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random sizing and positioning
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        
        // Staggered animation delay
        star.style.animationDelay = Math.random() * 2 + 's';
        
        starsContainer.appendChild(star);
    }
}

// Initialize stars on load
createStars();

