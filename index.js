// API for get requests
function refreshAt(hours, minutes, seconds) {
  var now = new Date();
  var then = new Date();

  if (now.getHours() > hours ||
    (now.getHours() == hours && now.getMinutes() > minutes) ||
    now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
    then.setDate(now.getDate() + 1);
  }
  then.setHours(hours);
  then.setMinutes(minutes);
  then.setSeconds(seconds);

  var timeout = (then.getTime() - now.getTime());
  setTimeout(function () {
    window.location.reload(true);
  }, timeout);
}

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
if (!won) {
  localStorage.setItem('won', 0)
}
won = localStorage.getItem('won');
played = localStorage.getItem('played');
let real_chances = 6;

function get_ans() {


  var user_answer = document.getElementById("answer").value;
  if (user_answer == '') {
    user_answer = user_answer + '         '
  }
  if (correct == false) {
    if (chances == 0) {
      localStorage.setItem('played', parseInt(played) + 1);
      console.log('u lose');
      button.disabled = true
    }
    console.log(user_answer)
    if (user_answer == title) {
      // x = x + '✓' ;
      button.disabled = true
      localStorage.setItem('won', 1 + parseInt(won));
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
  won = localStorage.getItem('won');
  played = localStorage.getItem('played');
  document.getElementById("played").innerHTML = played;
  document.getElementById("won").innerHTML = won;
  document.getElementById("win%").innerHTML = Math.round(won / played * 100) + '%';
  document.getElementById("lost").innerHTML = parseInt(played) - parseInt(won);
  document.getElementById('main').style.filter = 'blur(9px)';

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
  document.getElementById('main').style.filter = 'blur(0px)';
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == document.getElementById('stat-modal')) {
    document.getElementById('stat-modal').style.display = "none";
    document.getElementById('main').style.filter = 'blur(0px)';

  }
}

if (localStorage.getItem('played') == 0) {
  help();
}
var div = document.getElementById("countdown");

setInterval(function () {
  var toDate = new Date();
  var tomorrow = new Date();
  tomorrow.setHours(24, 0, 0, 0);
  var diffMS = tomorrow.getTime() / 1000 - toDate.getTime() / 1000;
  var diffHr = Math.floor(diffMS / 3600);
  diffMS = diffMS - diffHr * 3600;
  var diffMi = Math.floor(diffMS / 60);
  diffMS = diffMS - diffMi * 60;
  var diffS = Math.floor(diffMS);
  var result = ((diffHr < 10) ? "0" + diffHr : diffHr);
  result += ":" + ((diffMi < 10) ? "0" + diffMi : diffMi);
  result += ":" + ((diffS < 10) ? "0" + diffS : diffS);
  div.innerHTML = result;

}, 1000);

refreshAt(1, 5, 30);

function share() {
  navigator.clipboard.writeText('https://superpotato9.com/screenshot')
  document.getElementById('share').innerHTML = "Copied"
}
