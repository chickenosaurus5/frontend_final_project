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
