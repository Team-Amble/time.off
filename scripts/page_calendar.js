const ACTIVITIES = ["Restaurants", "Sightseeing", "Relaxation", "Nature", "Nightlife", "Local Events"];
const yelpUrl = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location=';

// TEST TO SEE IF LOCAL STORAGE WORKED
var checked = window.localStorage.getItem('checked');
var dest = window.localStorage.getItem('dest');
//console.log(checked);

// console.log(document.getElementById('myDropdown').getAttribute("id"))

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function showYelp(ev) {
  let title = ACTIVITIES[ev.id];
  document.querySelector('.drop-button').value = title;
  getYelpData(title);
  // console.log(ev.id)
}

function getYelpData(term) { //term is category ie. restaurants
  let url = yelpUrl + dest + '&term=' + term + "&limit=5";
  console.log(url);
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("external-events-list").innerHTML = "";
      for (let item of data) {
        document.getElementById("external-events-list").innerHTML += `
        <div class='fc-event'>${item.name}</div>
        `
      }
    });
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    // dropdowns.innerhtml =  stuff from checkboxes
    document.getElementById('myDropdown').innerHTML = "";
    let k = 1;
    for (let number of checked) {
      const num = parseInt(number-1);
      document.getElementById('myDropdown').innerHTML += `<a id = "${num}" onclick="showYelp(this);" href="#">${ACTIVITIES[num]}</a>`
      //console.log(document.getElementById('myDropdown').innerHTML);
      k++;
    }
    // var dropdowns = document.getElementsByClassName("dropdown-content"); // added this

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    /*var calendarEl = document.getElementById('calendar');*/
    var Draggable = FullCalendarInteraction.Draggable

    console.log('Dom acquire active')
    var containerEl = document.getElementById('external-events-list');
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText.trim()
        }
      }
    });

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'timeGrid' , 'interaction' ],
      defaultView: 'timeGridDay',
      aspectRatio: 2,
      header: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridDay,timeGridFourDay,timeGridWeek'
      },
      footer: {

        center: ' ',
        right: 'today prev, next'
      },

      views: {
        timeGridFourDay: {
          type: 'timeGrid',
          duration: { days: 3 },
          buttonText: '3  day'
        },
      },
      defaultDate: '2020-03-03',
      navLinks: true, // can click day/week names to navigate views
      editable: true,

      droppable: true,

      eventLimit: true, // allow "more" link when too many events
      events: []

    });

  calendar.render();
});

