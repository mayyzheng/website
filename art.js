//regular overlay

const artworkPreviews = document.querySelectorAll('.artwork-preview');
const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay-content');
const enlargedImage = document.querySelector('.enlarged-image');
const enlargedDescription = document.querySelector('.enlarged-description');
const closeButton = document.querySelector('.close-button');

artworkPreviews.forEach(preview => {
    preview.addEventListener('click', () => {
        const image = preview.querySelector('.artwork');
        const description = preview.querySelector('.description').innerHTML;

        enlargedImage.src = image.src;
        enlargedDescription.innerHTML = description;

        overlay.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


