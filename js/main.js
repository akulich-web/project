var backButton = document.querySelector('.arrow-left');
var nextButton = document.querySelector('.arrow-right');

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: backButton,
    nextArrow: nextButton,
    responsive: [
        {
            breakpoint: 768,
                settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]      
}); 
