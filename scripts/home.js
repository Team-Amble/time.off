// let user_metadata = "?guest/";
//
// const createUser = (username, password) => {
//   const user = {
//     username,
//     password
//   };
//   return `?username=${user.username}`;
// }
//
// $('#login').on("click", function() {
//   user_metadata = createUser($('#username').val(), $('#password').val());
// })

$('form').on("keypress", function (e) {
  if (e.which == 13) $(this).submit();
});


$('#search-bar').on("keypress", function(e) {
  if (e.which == 13){
    const term = $('#search-bar').val();
    console.log(term);


    //Check destination length
    if (term.length < 3 || term.length > 15){
      return;
    }
    window.location = "./templates/prefs.html?search=" + term;
  }
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
