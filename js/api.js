let apiKey = "658b246e22d347f4b8c499b4cb1644ab";
let apiUrl = "https://api.rawg.io/api/games";

// render funqciebi elementebistvis
function renderMainBanner() {
  let games = document.querySelectorAll("#game");
  let nextGames = document.querySelectorAll(".small-game-img");
  let gameTitles = document.querySelectorAll(".game-title");

  const gamesApi = JSON.parse(sessionStorage.getItem(`page-3-response`));

  for (let i = 0; i < 4; i++) {
    games[i].src = `${gamesApi[i].background_image}`;
    nextGames[i].src = `${gamesApi[i].background_image}`;
    gameTitles[i].textContent = `${gamesApi[i].name}`;
  }
}

function renderGameCards(wrapperIndex, startGameIndex, endGameIndex) {
  let gamesWrapper = document.querySelectorAll(".swiper-wrapper");
  const gamesApi = JSON.parse(sessionStorage.getItem(`page-3-response`));

  for (let i = startGameIndex; i < endGameIndex; i++) {
    let offerGameBanner = document.createElement("a");
    let gameBanner = document.createElement("img");
    let gameInfoDiv = document.createElement("div");
    let gameCardTitle = document.createElement("h2");
    let gameCardPrice = document.createElement("p");

    gameCardPrice.id = "game-card-price";
    offerGameBanner.classList.add("swiper-slide", "offer-game-banner");
    offerGameBanner.id = `${gamesApi[i].id}`;
    offerGameBanner.href = './gamePage/gamePage.html'
    gameInfoDiv.classList.add("game-info");
    gameBanner.id = "game-banner-img";
    
    gameBanner.src = `${gamesApi[i].background_image}`;
    gameBanner.alt = `${gamesApi[i].slug}`;
    gameCardTitle.textContent = `${gamesApi[i].name}`;


    if (sessionStorage.getItem(`${gamesApi[i].name}-priceResponse`) === null) {
      fetch(
        `https://www.cheapshark.com/api/1.0/deals?title=${gamesApi[i].name}&exact=1`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((priceData) => {
          console.log("fetch called");
          if (!priceData.length) {
            sessionStorage.setItem(`${gamesApi[i].name}-priceResponse`, "free");
            gameCardPrice.textContent = "free";
          } else {
            sessionStorage.setItem(
              `${gamesApi[i].name}-priceResponse`,
              priceData[0].normalPrice
            );
            gameCardPrice.textContent = `${priceData[0].normalPrice}$`;
          }

          if (wrapperIndex === 0) {
            if (gameCardPrice.textContent === "free") {
              gameCardPrice.style.color = "rgb(50,205,50)";
              gameCardPrice.textContent = `free`;
            } else {
              gameCardPrice.style.color = "rgb(50,205,50)";
              gameCardPrice.textContent = `${(
                parseFloat(gameCardPrice.textContent) -
                parseFloat(gameCardPrice.textContent) * 0.3
              ).toFixed(2)}$`;
            }
          }
        });
    } else {
      let gamePrice = sessionStorage.getItem(
        `${gamesApi[i].name}-priceResponse`
      );
      if (gamePrice === "free") {
        gameCardPrice.textContent = `${gamePrice}`;
      } else {
        gameCardPrice.textContent = `${gamePrice}$`;
      }

      if (wrapperIndex === 0) {
        if (gameCardPrice.textContent === "free") {
          gameCardPrice.style.color = "rgb(50,205,50)";
          gameCardPrice.textContent = `free`;
        } else {
          gameCardPrice.style.color = "rgb(50,205,50)";
          gameCardPrice.textContent = `${(
            parseFloat(gameCardPrice.textContent) -
            parseFloat(gameCardPrice.textContent) * 0.3
          ).toFixed(2)}$`;
        }
      }
    }

    gameCardTitle.id = "game-card-title";

    
    gameInfoDiv.appendChild(gameCardTitle);
    gameInfoDiv.appendChild(gameCardPrice);

    offerGameBanner.appendChild(gameBanner);
    offerGameBanner.appendChild(gameInfoDiv);

    gamesWrapper[wrapperIndex].appendChild(offerGameBanner);
  }
}

function renderGameColumns(){
    let gameCardCount = 0
    let columnIndex = 0
    //mtavari columnebi sadac tamashebi chaismeba 
    let gameColumns = document.querySelectorAll('.game-column')
    const gamesApi = JSON.parse(sessionStorage.getItem(`page-1-response`));

    for(let i = 0; i < 12; i++){
        
        let  colGameCard = document.createElement("div");
        let colGameImg = document.createElement("img");
        let colGameInfoDiv = document.createElement("div");
        let gameCardTitle = document.createElement("h2");
        let gameGenre = document.createElement("p");

        colGameCard.classList.add('col-game-card')
        colGameImg.id = 'col-game-img'
        colGameInfoDiv.classList.add('col-game-info')
        gameCardTitle.id = 'col-game-nm'
        gameGenre.id = 'col-game-genre'

        colGameImg.src = `${gamesApi[i].background_image}`;
        gameCardTitle.textContent = `${gamesApi[i].name}`;

        for(let j = 0; j <gamesApi[i].genres.length; j++){
            gameGenre.textContent += `${gamesApi[i].genres[j].name}; `
        }



        colGameInfoDiv.appendChild(gameCardTitle);
        colGameInfoDiv.appendChild(gameGenre);

        colGameCard.appendChild(colGameImg);
        colGameCard.appendChild(colGameInfoDiv);
        
        if(gameCardCount < 4){
            gameColumns[columnIndex].appendChild(colGameCard);
            gameCardCount++;
           
        }else{
            gameCardCount = 0;
            columnIndex++;
            gameColumns[columnIndex].appendChild(colGameCard); 
            gameCardCount++;
        }
        
        
        
    }

    

}

// page 1 response
if (sessionStorage.getItem(`page-1-response`) === null) {
  fetch(`${apiUrl}?key=${apiKey}&page=${1}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      sessionStorage.setItem(`page-1-response`, JSON.stringify(data.results));
        renderGameColumns()

    });
} else {
    renderGameColumns()
}


// page 3 response
if (sessionStorage.getItem(`page-3-response`) === null) {
  fetch(`${apiUrl}?key=${apiKey}&page=${3}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      sessionStorage.setItem(`page-3-response`, JSON.stringify(data.results));
      renderMainBanner();
      renderGameCards(0, 4, 12);
      renderGameCards(1, 13, 20);
    });
} else {
  renderMainBanner();
  renderGameCards(0, 4, 12);
  renderGameCards(1, 13, 20);
}




