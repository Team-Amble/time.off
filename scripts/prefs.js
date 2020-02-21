
window.addEventListener('DOMContentLoaded', function(){
  let l = window.location.href;
  let get_dest = l.split('=');
  const destination = get_dest[1].replace('%20', ' ');
  document.getElementById('dest').innerText = destination;
}, false);
