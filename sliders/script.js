let currentOffset = 0;
const imageRow = document.querySelector('.slider-row');
const previousButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

const slideWidth = 400;
const totalSlides = imageRow.children.length;

nextButton.addEventListener('click', function() {
    currentOffset += slideWidth;

    if (currentOffset >= totalSlides * slideWidth) {
        currentOffset = 0;
    }

    imageRow.style.left = -currentOffset + 'px';
});

previousButton.addEventListener('click', function() {
    currentOffset -= slideWidth;

    if (currentOffset < 0) {
        currentOffset = (totalSlides - 1) * slideWidth; 
}

    imageRow.style.left = -currentOffset + 'px';
});