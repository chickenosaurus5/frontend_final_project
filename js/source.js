//dynamic heart icon
let hearts = document.querySelectorAll('.fa-heart');

hearts.forEach(function(heart){
    heart.addEventListener('click',function (){
    heart.classList.toggle('fa-solid');
})
})

