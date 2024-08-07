const carouselInner2 = document.querySelector('.carousel-inner2');

carouselInner2.addEventListener('mouseover', () => {
    carouselInner2.style.animationPlayState = 'paused';
});

carouselInner2.addEventListener('mouseout', () => {
    carouselInner2.style.animationPlayState = 'running';
});
