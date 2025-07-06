let gameid = JSON.parse(sessionStorage.getItem("gameid")); //მოგვაქ თამაშის შენახული id

let apiKey = "658b246e22d347f4b8c499b4cb1644ab";
let apiUrl = "https://api.rawg.io/api/games";

// შესრულდება იმ შემთხვევაში თუ gameinfo არ შექმნილა ან წამოღებული თამაშის id არ ემთხვევა ახალ gameid-ის
if (
  sessionStorage.getItem("gameinfo") === null ||
  JSON.parse(sessionStorage.getItem("gameinfo")).id != gameid
) {
  fetch(`${apiUrl}/${gameid}?key=${apiKey}`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      console.log("fetched");
      sessionStorage.setItem("gameinfo", JSON.stringify(data));
    })
    .catch((err) => {
      console.error(err);
    });
}

let currGame = document.querySelector(".current-game-div");
let screenShotWrapper = document.querySelector(".screen-list-wrapper");
let screenShotDiv = document.querySelector(".screenshots-list");

let nextbtn = document.querySelector(".next-butn");
let prevbtn = document.querySelector(".prev-butn");

screenShotWrapper .style.width = `min(${currGame.offsetWidth}px,100%)`;




nextbtn.addEventListener('click',function(){
  screenShotDiv.scrollTo({ 
  left: screenShotDiv.scrollLeft+screenShotDiv.clientWidth,
  behavior: "smooth",
});
})

prevbtn.addEventListener('click',function(){
  screenShotDiv.scrollTo({ 
  left: screenShotDiv.scrollLeft-screenShotDiv.clientWidth,
  behavior: "smooth",
});
})

// currGame.addEventListener('click',function(){
//   console.log(screenShotDiv.clientWidth/2)
//   screenShotDiv.scrollTo({ 
//   right: screenShotDiv.scrollRight-screenShotDiv.clientWidth,
//   behavior: "smooth",
// });
// })