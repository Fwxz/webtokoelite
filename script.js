document.addEventListener('DOMContentLoaded', function() {
    // Show skeleton loader initially
    const loader = document.getElementById('skeleton-loader');
    loader.style.display = 'flex';

    // Simulate content loading (e.g., fetching data)
    setTimeout(function() {
        // Hide skeleton loader when content is loaded
        loader.style.display = 'none';
    }, 2000); // Setting Waktu
});


document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after content is fully loaded
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
    });
});


// pop up
document.getElementById('promo-popup').addEventListener("click", function() {
        document.getElementById('promo-popup').style.display = "none";
 });


function closePopup() {
    document.getElementById('promo-popup').style.display = 'none';
}
// Show popup after 2 seconds
setTimeout(() => {
    document.getElementById('promo-popup').style.display = 'flex';
}, 3000);





