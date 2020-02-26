const ACTIVITIES = ["Restaurants", "Sightseeing", "Relaxation", "Nature", "Nightlife", "Local Events"];

const DESCRIPTIONS = [
    "For good food, drink, and atmosphere",
    "For those views that take your breath away",
    "Sometimes you just need a little \"me\" time",
    "For when city-life gets a bit too claustrophobic",
    "Because the dancefloor is calling your name",
    "You want to immerse yourself in the local culture",
];

const yelpUrl = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location=';

const createCard = (type, description, i) => {
  const template = `
      <div class="card card${i}">
        <img src="../images/${type}.jpg" class="card-img-top">
        <div class="card-body">
          <h4 class="card-title">${type}</h4>
          <p class="card-text">${description}</p>
        </div>
        <div class="card-body">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            View More
          </button>
        </div>
      </div>`

  return template;
};


const addDataToModal = (yelpData) => {
  let yelpDataList = document.querySelector('#yelp-list');
  console.log(yelpDataList);
  console.log(yelpData)

  for (place of yelpData){
    let template = `<p>${place['name']} -- ${place['price']}</p>`;
    yelpDataList.innerHTML += template;
  }
  return;
}


function getYelpData(term) {
  let url = yelpUrl + term + "&limit=5";
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(addDataToModal);
};


const addModalClick = (ev) => {
  const parent = ev.target.parentNode.parentNode;
  const title = parent.getElementsByTagName('h4')[0].innerText;
  document.querySelector('#yelp-list').innerHTML = "";
  document.querySelector('#exampleModalLongTitle').innerText = title;
  getYelpData(title);
}


function addCardEventListener(){
  let cards = document.querySelectorAll('.card');
  for (card of cards){
    card.onclick = addModalClick;
  }
}

window.addEventListener('DOMContentLoaded', function(){

  // Dynamically create cards based on user selection
  let url = window.location.href;
  let get_checked = url.split('=');
  $('#cards').innerHTML = "";
  let i = 1;
  for (number of get_checked[1]){
    const num = parseInt(number-1);
    const card = createCard(ACTIVITIES[num], DESCRIPTIONS[num], i);
    document.querySelector('#cards').innerHTML += card;
    i++;
  }
  addCardEventListener();
}, false);
