  let gameBanners = document.querySelectorAll(".offer-game-banner");
  let gameCols = document.querySelectorAll('.col-game-card');

  gameBanners.forEach((gameBanner) => {
    gameBanner.addEventListener("click", function (e) {
      e.preventDefault();
      sessionStorage.setItem("gameid", JSON.stringify(gameBanner.id));
      window.location.href = this.href;
    });
  });


  gameCols.forEach((gameCol) => {
    gameCol.addEventListener("click", function (e) {
      e.preventDefault();
      sessionStorage.setItem("gameid", JSON.stringify(gameCol.id));
      window.location.href = this.href;
    });
  });



