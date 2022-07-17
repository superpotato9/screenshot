// API for get requests
//TODO: remove the answers
fetchRes = fetch(
  "https:/superpotato9.com/tvdle/data");
// fetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
  res.json()).then(d => {
  //console.log(d)
  element = d
  console.log(element["title"]);
  release =  element["release"];
  title = element['title'];
  poster = element["poster"];

  console.log(release, title, poster);
  document.getElementById("main").src=poster;

  //document.getElementById("example").innerHTML =  element;




})

function get_ans() {
  var user_answer = document.getElementById("answer").value;

  console.log(user_answer)
}

let box = document.querySelector('main');
let width = box.offsetWidth;
let height = box.offsetHeight;
console.log(height);
console.log(height);
