//dynamic heart icon
let hearts = document.querySelectorAll(".fa-heart");

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("fa-solid");
  });
});

// store page game banner controler

let banners = document.querySelectorAll(".game-banner");
let bannerImgs = document.querySelectorAll(".small-game-img");
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
      bannerImgs.forEach(function (bannerImg) {
        bannerImg.classList.remove("small-game-img-selected");
      });
      banner.classList.add("game-banner-clicked");
      banner.firstElementChild.classList.add("loading-div-anim");
      bannerImgs[index].classList.add("small-game-img-selected");

      currg.scrollTo({
        left: currg.clientWidth * index,
        behavior: "smooth",
      });
    }
  });
}

for (let i = 0; i < 4; i++) {
  banners[i].firstElementChild.addEventListener("animationend", () => {
    banners[i].classList.remove("game-banner-clicked");
    banners[i].firstElementChild.classList.remove("loading-div-anim");
    bannerImgs[i].classList.remove("small-game-img-selected");
    if (i + 1 < 4) {
      banners[i + 1].click();
      banners[i + 1].classList.add("game-banner-clicked");
      banners[i + 1].firstElementChild.classList.add("loading-div-anim");
      bannerImgs[i + 1].classList.add("small-game-img-selected");
    }
  });
}

banners[0].click();

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

// swiper section

let mainBannerWrapper = document.querySelector(".main-banner-wrapper");
let mainSwiper = document.querySelectorAll(".game-offers-section");
let searchBarCont = document.querySelector(".searchbar-container");
let gameColumns = document.querySelector(".game-columns-section");
mainSwiper[0].style.width = `min(${mainBannerWrapper.offsetWidth}px,100%)`;
mainSwiper[1].style.width = `min(${mainBannerWrapper.offsetWidth}px,100%)`;
searchBarCont.style.width = `min(${mainBannerWrapper.offsetWidth}px,100%)`;
gameColumns.style.width = `min(${mainBannerWrapper.offsetWidth}px,100%)`;

const swiper1 = new Swiper(".swiper1", {
  speed: 900,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  pagination: {
    el: ".swiper-pagination1",
  },
  breakpoints: {
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    730: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    1070: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1426: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  speed: 900,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination2",
  },
  breakpoints: {
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    730: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    1070: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1426: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
  },
});

const swiper3 = new Swiper(".swiper3", {
  speed: 300,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 1,
  pagination: {
    el: ".swiper-pagination3",
  },
  breakpoints: {
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    730: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
  },
});
