// Countdown Timer
function updateCountdown() {
    // Set the date we're counting from (November 3, 2024 at 22:00)
    const countFromDate = new Date('November 3, 2024 22:00:00').getTime();
    const now = new Date().getTime();
    const distance = now - countFromDate;
    
    // Time calculations
    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    if(document.getElementById('years')) {
        document.getElementById('years').innerHTML = years;
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initialize the countdown when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Add animation to love reasons
document.addEventListener('DOMContentLoaded', function() {
    const reasons = document.querySelectorAll('.love-reasons li');
    
    reasons.forEach((reason, index) => {
        // Add delay based on index for staggered animation
        reason.style.animationDelay = `${index * 0.05}s`;
    });
});