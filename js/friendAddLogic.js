let usrnameApiKey = 'uw/DUsth75wf1n03Egpo+Q==wAdEhLb9oT8znOER'

let friendPlus = document.querySelector('.fa-plus');

friendPlus.addEventListener('click',function(){
  let friendUl = document.querySelector('.friend-ul')
  let friendLi = document.createElement('li');
  let personImg = document.createElement('img');
  let personName = document.createElement('p');
  let aloneIndicator = document.querySelector('.alone-indicator')

  if(friendUl.contains(aloneIndicator)){
    friendUl.removeChild(aloneIndicator)
  }

  friendLi.classList.add('friend-li');

  fetch(`https://api.api-ninjas.com/v1/randomuser`, {
    method: "GET",
    headers: {
    'X-Api-Key': usrnameApiKey
  }
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      console.log()
      personName.textContent = `${data.username}`;
      personImg.src = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${Math.random(99999)}`;
      personImg.alt = 'random person';
      friendLi.appendChild(personImg);
      friendLi.appendChild(personName);
      friendUl.appendChild(friendLi);
    })
    .catch((err) => {
      console.error(err);
    });

})