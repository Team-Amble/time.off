let selected = [];

window.addEventListener('DOMContentLoaded', function(){
  let l = window.location.href;
  let get_dest = l.split('=');

  // const user = get_dest[1].split('?')[0];
  const destination = get_dest[1].replace('%20', ' ');

  // document.querySelector('#username').innerText = user;
  document.querySelector('#dest').innerText = destination;
}, false);


// Events for handling checkbox clicks
$('#checkbox1').on("click", function(e) {
  selected.push("1");
})

$('#checkbox2').on("click", function(e) {
  selected.push("2");
})

$('#checkbox3').on("click", function(e) {
  selected.push("3");
})

$('#checkbox4').on("click", function(e) {
  selected.push("4");
})

$('#checkbox5').on("click", function(e) {
  selected.push("5");
})

$('#checkbox6').on("click", function(e) {
  selected.push("6");
})

const createURL = () => {
  let string = "";
  for (number of selected){
    string += number;
  }
  return string;
}


$('#make-itinerary').on("click", function(e) {
  let l = window.location.href;
  let get_dest = l.split('=');

  // const user = get_dest[1].split('?')[0];
  const destination = get_dest[1].replace('%20', ' ');
  let checked = createURL();
  window.location = "./options.html?checked=" + checked + "?destination=" + destination;
})
