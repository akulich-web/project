var backButton = document.querySelector('.arrow-left');
var nextButton = document.querySelector('.arrow-right');

$('.slick-slider').slick({
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

const elements = document.querySelectorAll('.element');

elements.forEach(element =>{
    let btn = element.querySelector('.question button');
    let icon = element.querySelector('.question button i');
    var answer = element.lastElementChild;
    var answers = document.querySelectorAll('.element .answer');

    btn.addEventListener('click', ()=>{
        answers.forEach(ans =>{
            let ansIcon = ans.parentElement.querySelector('button i');
            if(answer !== ans){
                ans.classList.add('hideText');
                ansIcon.className = 'fas fa-chevron-down';
            }
        });

        answer.classList.toggle('hideText');
        icon.className === 'fas fa-chevron-down' ? icon.className = 'fas fa-chevron-up' 
        : icon.className ='fas fa-chevron-down';
    });
});
