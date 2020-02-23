const search = (ev) => {
    const term = document.querySelector('#search-bar').value;
    console.log('search for:', term);
    if (ev) {
        ev.preventDefault();
    }
}



document.querySelector('#search-bar').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
        const term = document.querySelector('#search-bar').value;
        //Check destination length
        if (term.length < 3 || term.length > 15){
          return;
        }
        window.location = "./templates/prefs.html?search=" + term;
    }
};
