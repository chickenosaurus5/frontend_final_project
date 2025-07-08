//dynamic heart icon
let hearts = document.querySelectorAll(".fa-heart");

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("fa-solid");
  });
});


// footer backToTop logic
let backTopDiv = document.querySelector(".back-to-top-bttn");
backTopDiv.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
// footer list logic
let comDiv = document.querySelector(".com-div");
let comUl = document.querySelector(".com-ul");


comDiv.firstElementChild.addEventListener("click", function () {
  comUl.classList.toggle('show')
});

let osDiv = document.querySelector(".os-div");
let osUl = document.querySelector(".os-ul");


osDiv.firstElementChild.addEventListener("click", function () {
  osUl.classList.toggle('show')
});

let mDiv = document.querySelector(".market-div");
let mUl = document.querySelector(".Marketplace-ul");


mDiv.firstElementChild.addEventListener("click", function () {
  mUl.classList.toggle('show')
});




// burger bar logic

let bBar = document.querySelector('.fa-bars')
bBar.addEventListener('click',function(){
  let sideBar = document.querySelector('.side-bar');
  //  let mainBar = document.querySelector('.main-header');
  let menucover = document.querySelector('.menu-cover');
  menucover.style.display = 'block';
  if (menucover.classList.contains('menu-cover-anim-back')){
     menucover.classList.remove('menu-cover-anim-back');
  }
  
  sideBar.classList.add('side-bar-appear')
  menucover.classList.add('menu-cover-anim');
})

let menuCover = document.querySelector('.menu-cover');


menuCover.addEventListener('click',function(){
  // menuCover.classList.add('menu-cover');
  let sideBar = document.querySelector('.side-bar');
  menuCover.classList.remove('menu-cover-anim');
  menuCover.classList.add('menu-cover-anim-back');
  sideBar.classList.remove('side-bar-appear');
})


// friend adding logic

