  let gameBanners = document.querySelectorAll(".offer-game-banner");

  gameBanners.forEach((gameBanner) => {
    gameBanner.addEventListener("click", function (e) {
      e.preventDefault();
      sessionStorage.setItem("gameid", JSON.stringify(gameBanner.id));
      window.location.href = this.href;
    });
  });
