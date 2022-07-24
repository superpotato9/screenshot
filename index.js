// API for get requests


fetchRes = fetch(
  "https:/superpotato9.com/tvdle/data");
// fetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
  res.json()).then(d => {
  //console.log(d)
  element = d

  release = element["release"];
  title = element['title'];
  poster = element["poster"];
  answer = title;

  correct = false

  document.getElementById("main").src = poster;


  //document.getElementById("example").innerHTML =  element;

// document.getElementById('image-container').style.width = "30px";
  img_size = 10

  document.getElementById("image-container").style.width = 10 + "em";
  document.getElementById("image-container").style.height = 10 + "em";

})

chances = 6;
const button = document.querySelector('button')

x = ''
let played;
played = localStorage.getItem('played');
let won
won = localStorage.getItem('won');

if (!played) {
  localStorage.setItem('played', 0)
}

let real_chances = 6;

function get_ans() {


  var user_answer = document.getElementById("answer").value;
  if (user_answer == '') {
    user_answer = user_answer + '         '
  }
  if (correct == false) {
    if (chances == 0) {
      localStorage.setItem('played', parseInt(played) + '1');
      console.log('u lose');
      button.disabled = true
    }
    console.log(user_answer)
    if (user_answer == title) {
      // x = x + '✓' ;
      button.disabled = true

      localStorage.setItem('played', 1 + parseInt(played));
      console.log('correct!')
      document.getElementById("count").style.color = "green";
      document.getElementById("count").style.fontSize = "40";
      document.getElementById("count").innerHTML = x + "\t✅";


      // document.getElementById("answer-boxes").insertAdjacentHTML("afterend", ' <p id="text" style="border-color: #4CAF50"> ' + user_answer + '</p> ')
      document.getElementById("image-container").style.width = 22 + "em";
      document.getElementById("image-container").style.height = 28 + "em";
      correct = true


// after this here we are calling both the function so it works
      const start = () => {
        setTimeout(function () {
          confetti.start()
        }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
      };

      //  for stopping the confetti

      const stop = () => {
        setTimeout(function () {
          confetti.stop()
        }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
      };
      // console.log(release, title, poster);

      start();
      stop();


    } else {
      chances = chances - 1;
      console.log('wrong');
      x = x + '❌'
      document.getElementById("count").innerHTML = x;

      real_chances = real_chances - 1;
      img_size = img_size + 3
      if (chances > 2) {
        document.getElementById("image-container").style.width = img_size + "em";
      }
      document.getElementById("image-container").style.height = img_size + "em";


    }
  }
  document.getElementById('answer').value = ''; //clears value of text box
}

function help() {
  console.log('help ')
  modal.style.display = "block";
}

function stat() {
  console.log('stats ')
  document.getElementById('stat-modal').style.display = "block";
  document.getElementById("played").innerHTML = played;
}


var modal = document.getElementById("myModal");

// Get the button that opens the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
document.getElementById('stat-close').onclick = function () {

  document.getElementById('stat-modal').style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == document.getElementById('stat-modal')) {
    document.getElementById('stat-modal').style.display = "none";
  }
}

if (localStorage.getItem('played') == 0) {
  help();
}
