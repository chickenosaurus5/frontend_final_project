let gameid = JSON.parse(sessionStorage.getItem("gameid")); //მოგვაქ თამაშის შენახული id

let apiKey = "658b246e22d347f4b8c499b4cb1644ab";
let apiUrl = "https://api.rawg.io/api/games";

// შესრულდება იმ შემთხვევაში თუ gameinfo არ შექმნილა ან წამოღებული თამაშის id არ ემთხვევა ახალ gameid-ის
if (
  sessionStorage.getItem("gameinfo") === null ||
  JSON.parse(sessionStorage.getItem("gameinfo")).id != gameid
) {
  //metadata
  fetch(`${apiUrl}/${gameid}?key=${apiKey}`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      sessionStorage.setItem("gameinfo", JSON.stringify(data));
      renderMetaData();
    })
    .catch((err) => {
      console.error(err);
    });

  // videoebistvis
  fetch(`${apiUrl}/${gameid}/movies?key=${apiKey}`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      sessionStorage.setItem("gameTrailers", JSON.stringify(data));
      renderVideo();
    })
    .catch((err) => {
      console.error(err);
    });

  // screenshotebistvis
  fetch(`${apiUrl}/${gameid}/screenshots?key=${apiKey}`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      sessionStorage.setItem("gameScreenshots", JSON.stringify(data));
      renderMediaContent();
    })
    .catch((err) => {
      console.error(err);
    });
  fetch(`${apiUrl}/${gameid}/achievements?key=${apiKey}`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      sessionStorage.setItem("achievements", JSON.stringify(data));
      renderAchivs()
    })
    .catch((err) => {
      console.error(err);
    });
} else {
  renderAchivs();
  renderMetaData();
  renderVideo();
  renderMediaContent();
}

let currGame = document.querySelector(".current-game-div");
let screenShotWrapper = document.querySelector(".screen-list-wrapper");
let screenShotDiv = document.querySelector(".screenshots-list");
let gameScreenshotsParent = document.querySelector(".main-banner-wrapper");
let gameTitleDiv = document.querySelector(".game-titleArate");

let nextbtn = document.querySelector(".next-butn");
let prevbtn = document.querySelector(".prev-butn");

// gameScreenshotsParent.style.width = `min(${currGame.offsetWidth}px,100%)`;

nextbtn.addEventListener("click", function () {
  screenShotDiv.scrollTo({
    left: screenShotDiv.scrollLeft + screenShotDiv.clientWidth,
    behavior: "smooth",
  });
});

prevbtn.addEventListener("click", function () {
  screenShotDiv.scrollTo({
    left: screenShotDiv.scrollLeft - screenShotDiv.clientWidth,
    behavior: "smooth",
  });
});

// rendering funqctiebi

function rateingDriver(num) {
  let rateVal = document.querySelector(".rate-value");
  let ratingStars = document.querySelectorAll(".star-shape");
  let value = num.toFixed(1);
  rateVal.textContent = `${value}`;
  console.log(value);
  let wholePoint = Number(value.split(".", 2)[0]);
  let floatingPoint = Number(value.split(".", 2)[1]);

  if (wholePoint <= 5) {
    for (let i = 0; i < wholePoint; i++) {
      ratingStars[i].style.backgroundImage =
        "linear-gradient(90deg, rgb(255, 145, 0) 100%, rgb(77, 76, 76) 0%)";
    }
    if (floatingPoint != NaN) {
      ratingStars[
        wholePoint
      ].style.backgroundImage = `linear-gradient(90deg, rgb(255, 145, 0) ${
        floatingPoint * 10
      }%, rgb(77, 76, 76) 0%)`;
    }
  }
}

function renderMediaContent() {
  let currGameDiv = document.querySelector(".current-game-div");
  let screenShotsList = document.querySelector(".screenshots-list");
  const screenshotObj = JSON.parse(sessionStorage.getItem(`gameScreenshots`));
  for (let i = 0; i < screenshotObj.count; i++) {
    let gameAnchor = document.createElement("a");
    let smallGameImg = document.createElement("img");
    let currImg = document.createElement("img");

    gameAnchor.href = `${screenshotObj.results[i].id}`;
    smallGameImg.classList.add("box");

    currImg.id = `${screenshotObj.results[i].id}`;
    currImg.classList.add("curr-obj");

    gameAnchor.addEventListener("click", function (e) {
      e.preventDefault();
      let currObjs = document.querySelectorAll(".curr-obj");
      for (let i = 0; i < currObjs.length; i++) {
        if (currObjs[i].id === this.getAttribute("href")) {
          currGameDiv.scrollTo({
            left: currGameDiv.clientWidth * i,
            behavior: "smooth",
          });
        }
      }
    });

    smallGameImg.src = `${screenshotObj.results[i].image}`;
    currImg.src = `${screenshotObj.results[i].image}`;

    gameAnchor.appendChild(smallGameImg);
    screenShotsList.appendChild(gameAnchor);
    currGameDiv.appendChild(currImg);
  }
}

function renderVideo() {
  let currGameDiv = document.querySelector(".current-game-div");
  let screenShotsList = document.querySelector(".screenshots-list");
  const videosObj = JSON.parse(sessionStorage.getItem(`gameTrailers`));
  if (videosObj.count !== 0) {
    for (let i = 0; i < videosObj.count; i++) {
      let gameAnchor = document.createElement("a");
      let videoCont = document.createElement("video");
      let smallVideoImg = document.createElement("img");
      let vidSource = document.createElement("source");
      vidSource.src = `${videosObj.results[i].data.max}`;

      smallVideoImg.src = `${videosObj.results[i].preview}`;
      gameAnchor.href = `${videosObj.results[i].id}`;
      videoCont.id = `${videosObj.results[i].id}`;
      smallVideoImg.classList.add("box");
      videoCont.classList.add("curr-obj");

      console.log(smallVideoImg.innerHTML);
      gameAnchor.innerHTML = '<i class="fa-solid fa-play"></i>';

      gameAnchor.classList.add("game-anchor");

      gameAnchor.addEventListener("click", function (e) {
        e.preventDefault();
        let currObjs = document.querySelectorAll(".curr-obj");
        for (let i = 0; i < currObjs.length; i++) {
          if (currObjs[i].id === this.getAttribute("href")) {
            currGameDiv.scrollTo({
              left: currGameDiv.clientWidth * i,
              behavior: "smooth",
            });
          }
        }
      });

      vidSource.type = "video/mp4";
      videoCont.controls = true;
      videoCont.muted = true;
      videoCont.autoplay = true;
      videoCont.appendChild(vidSource);
      currGameDiv.appendChild(videoCont);
      gameAnchor.appendChild(smallVideoImg);
      screenShotsList.appendChild(gameAnchor);
    }
  }
}

function renderMetaData() {
  const gamesApi = JSON.parse(sessionStorage.getItem(`gameinfo`));

  let gameTitle = document.querySelector(".game-title");
  let gameDesc = document.querySelector(".description");
  let esrbFlag = document.querySelector(".esrb-text");
  let esrbImage = document.querySelector("#esrb-img");
  let devName = document.querySelector(".dev-nm");
  let pubName = document.querySelector(".pub-nm");
  let relDate = document.querySelector(".rel-nm");
  let platf = document.querySelector(".plat-name");
  let genreDiv = document.querySelector(".genre-div");
  let featureDiv = document.querySelector(".feature-div");

  for(let i = 0; i < gamesApi.genres.length; i++){
    let genre = document.createElement('p');
    genre.textContent = `${gamesApi.genres[i].name}`;
    genreDiv.appendChild(genre);
  }

  for(let i = 0; i < gamesApi.tags.length; i++){
    let feature = document.createElement('p');
    feature.textContent = `${gamesApi.tags[i].name}`;
    featureDiv.appendChild(feature);
  }
  
  gameTitle.textContent = `${gamesApi.name}™`;
  rateingDriver(gamesApi.rating);
  gameDesc.textContent = `${gamesApi.description_raw}`;
  

  let platStr = "";

  devName.textContent = `${gamesApi.developers[0].name}`;
  gamesApi.platforms.forEach((element) => {
    platStr += element.platform.name + "/";
    platf.textContent = `${platStr}`;
  });

  pubName.textContent = `${gamesApi.publishers[0].name}`;
  relDate.textContent = `${gamesApi.released}`;
  if(gamesApi.esrb_rating !== null){
    esrbFlag.textContent = `${gamesApi.esrb_rating.name}`;
  switch (gamesApi.esrb_rating.name) {
    case "Everyone":
      esrbImage.src = "../esrb_icons/ERateing.png";
      break;
    case "Everyone 10+":
      esrbImage.src = "../esrb_icons/E10Rateing.png";
      break;
    case "Teen":
      esrbImage.src = "../esrb_icons/TRateing.png";
      break;
    case "Mature":
      esrbImage.src = "../esrb_icons/MRateing.png";
      break;
    case "Adults Only":
      esrbImage.src = "../esrb_icons/ARateing.png";
      break;
    default:
      esrbImage.src = "../esrb_icons/ratingPending.png";
  }
  }else{
    esrbImage.src = "../esrb_icons/ratingPending.png";
  }
  
}

function renderAchivs() {
  const gamesApi = JSON.parse(sessionStorage.getItem(`achievements`));
  let achiWrap = document.querySelector('.ach-wrapper')
  
  if(gamesApi.count){
    for (let i = 0; i < gamesApi.results.length; i++) {
    let achiDiv = document.createElement("div");

    achiDiv.classList.add("achievement");

    let achiImg = document.createElement("img");
    achiImg.src = `${gamesApi.results[i].image}`;

    let achiName = document.createElement("p");
    let achiPerc = document.createElement("p");

    achiName.classList.add("ach-name");
    achiPerc.classList.add("comp-perc");

    achiName.textContent = `${gamesApi.results[i].name}`;
    achiPerc.textContent = `${gamesApi.results[i].percent}%`;

    achiDiv.appendChild(achiImg);
    achiDiv.appendChild(achiName);
    achiDiv.appendChild(achiPerc);

    achiWrap.appendChild(achiDiv);
  }

  }else{
    let noAchiWarning = document.createElement('p');
    noAchiWarning.textContent = 'No achievements found';
    noAchiWarning.classList.add("comp-perc");
    achiWrap.appendChild(noAchiWarning);
  }
}
