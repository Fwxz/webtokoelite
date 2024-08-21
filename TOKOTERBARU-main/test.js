document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-description');
    const productDescription = document.querySelector('.product-description');

    if (toggleButton && productDescription) {
        toggleButton.addEventListener('click', function () {
            productDescription.classList.toggle('expanded');
            if (productDescription.classList.contains('expanded')) {
                toggleButton.textContent = 'Tutup';
            } else {
                toggleButton.textContent = 'Baca Selengkapnya';
            }
        });
    }
});
