//dynamic heart icon
let hearts = document.querySelectorAll(".fa-heart");

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("fa-solid");
  });
});



// store page game banner controler


let banners = document.querySelectorAll(".game-banner");
let bannerImgs = document.querySelectorAll('.small-game-img')
let currg = document.querySelector(".current-game-div");

let intId = setInterval(() => {
  banners[0].click();
}, 20000);

for (const [index, banner] of banners.entries()) {
 
  banner.addEventListener("click", function () {
    if (!banner.classList.contains("game-banner-clicked")) {
      clearInterval(intId);
      intId = setInterval(() => {
        banners[0].click();
      }, (20 - index * 5) * 1000);

      banners.forEach(function (banner) {
        banner.classList.remove("game-banner-clicked");
        banner.firstElementChild.classList.remove("loading-div-anim");
        
      });
      bannerImgs.forEach(function(bannerImg){
        bannerImg.classList.remove('small-game-img-selected');
      })
      banner.classList.add("game-banner-clicked");
      banner.firstElementChild.classList.add("loading-div-anim");
      bannerImgs[index].classList.add('small-game-img-selected');

      currg.scrollTo({
        left: currg.clientWidth * index,
        behavior: 'smooth'
      })
    }
  });
}

for (let i = 0; i < 4; i++) {
  banners[i].firstElementChild.addEventListener("animationend", () => {
    banners[i].classList.remove("game-banner-clicked");
    banners[i].firstElementChild.classList.remove("loading-div-anim");
    bannerImgs[i].classList.remove('small-game-img-selected');
    if (i + 1 < 4) {
      banners[i+1].click()
      banners[i + 1].classList.add("game-banner-clicked");
      banners[i + 1].firstElementChild.classList.add("loading-div-anim"); 
      bannerImgs[i+1].classList.add('small-game-img-selected');
    }
  });
}

banners[0].click();


// swiper section

let mainBannerWrapper = document.querySelector('.main-banner-wrapper');
let mainSwiper = document.querySelector('.game-offers-section');
let searchBarCont = document.querySelector('.searchbar-container')
mainSwiper.style.width = `min(${mainBannerWrapper.offsetWidth}px,100%)`
searchBarCont.style.width = `min(${mainBannerWrapper.offsetWidth}px,100%)`
const swiper = new Swiper('.swiper', {
  speed: 1200,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20
    }
  }
});
