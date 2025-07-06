let gameBanners = document.querySelectorAll(".offer-game-banner");

gameBanners.forEach((gameBanner) => {
  gameBanner.addEventListener("click", function () {
    sessionStorage.setItem("gameid", JSON.stringify(gameBanner.id));
  });
});
