
let apiKey = '579dccf31bc94242a6342e0eaed1943c'
let apiUrl = 'https://api.rawg.io/api/games'




function renderMainBanner(){
    let games = document.querySelectorAll('#game')
    let nextGames = document.querySelectorAll('.small-game-img')
    let gameTitles = document.querySelectorAll('.game-title')

    const gamesApi =  JSON.parse(sessionStorage.getItem('response'))

    for(let i = 0; i < 4; i++){
        games[i].src = `${gamesApi[i].background_image}`
        nextGames[i].src = `${gamesApi[i].background_image}`
        gameTitles[i].textContent = `${gamesApi[i].name}`
    }
}

function renderGameCards(){

    let gameBanners = document.querySelectorAll('#game-banner-img')
    let gameCardTitles = document.querySelectorAll('#game-card-title')
    
    const gamesApi =  JSON.parse(sessionStorage.getItem('response'))
    for(let i = 4; i < 12; i++){
        gameBanners[i-4].src = `${gamesApi[i].background_image}`
        gameCardTitles[i-4].textContent = `${gamesApi[i].name}`
        // nextGames[i].src = `${gamesApi[i].background_image}`
        // gameTitles[i].textContent = `${gamesApi[i].name}`
    }
}

if (sessionStorage.getItem('response') === null){
    console.log(sessionStorage.getItem('response'))
    fetch(`${apiUrl}?key=${apiKey}&page=${3}`,{
    method: 'GET',
  }).then(res => res.json())
    .then(data => {
        sessionStorage.setItem('response',JSON.stringify(data.results))
        renderMainBanner();
        renderGameCards();
    })

}else{
    renderMainBanner();
    renderGameCards();
}




