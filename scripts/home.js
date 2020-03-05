$('form').on("keypress", function (e) {
  if (e.which == 13) $(this).submit();
});

function load_page() {
  const term = $('#search-bar').val();
  if (term.length < 3 || term.length > 15){
    return;
  }
  window.location = "./templates/prefs.html?search=" + term;
}

$('#search-bar').on("keypress", function(e) {
  if (e.which == 13){

    console.log(term);


    //Check destination length
    load_page();
  }
})

$('#search-btn').on("click", function() {
  load_page();
})


// document.querySelector('#search-bar').onkeyup = (ev) => {
//     // Number 13 is the "Enter" key on the keyboard
//     console.log(ev.keyCode);
//     if (ev.keyCode === 13) {
//         ev.preventDefault();
//         search();
//
//
//         const term = document.querySelector('#search-bar').value;
//
//
//         //Check destination length
//         if (term.length < 3 || term.length > 15){
//           return;
//         }
//         window.location = "./templates/prefs.html?search=" + term;
//
//     }
// };
