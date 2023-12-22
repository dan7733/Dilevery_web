// slider
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleSlidesOnly'), {
        interval: 2000,
        pause: 'hover',
        wrap: true
    });
})