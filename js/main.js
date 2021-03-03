var backButton = document.querySelector('.arrow-left');
var nextButton = document.querySelector('.arrow-right');

$('.slick-slider ').slick({
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
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]      
});

var backButton = document.querySelector('.arrow-left2');
var nextButton = document.querySelector('.arrow-right2');
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    prevArrow: backButton,
    nextArrow: nextButton,
    responsive: [
        {
            breakpoint: 768,
                settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
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



$(document).ready(function() {
    $('#slider1').tinycarousel();
    var slider = $("#slider1").data("plugin_tinycarousel");
  
    $('#link1').click(function(e) {
      slider.move(0);
      e.preventDefault();
    });
    $('#link2').click(function(e) {
      slider.move(1);
      e.preventDefault();
    });
    $('#link3').click(function(e) {
      slider.move(2);
      e.preventDefault();
    });
    $('#link4').click(function(e) {
        slider.move(3);
        e.preventDefault();
      });
  });

$(function() {




$("#nav-toggle").on("click", function(event) {
    event.preventDefault();


    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});
});
