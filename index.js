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


  // console.log(release, title, poster);
  document.getElementById("main").src = poster;


  //document.getElementById("example").innerHTML =  element;

// document.getElementById('image-container').style.width = "30px";
  img_size = 10

  document.getElementById("image-container").style.width = 10 + "em";
  document.getElementById("image-container").style.height = 10 + "em";

})
chances = 6;
function get_ans() {
  var user_answer = document.getElementById("answer").value;
  if (chances == 0) {
    console.log('u lose');
  }
  console.log(user_answer)
  if (user_answer == title) {
    console.log('correct!')

  } else {
    chances = chances - 1;
    console.log('wrong');
    img_size = img_size + 5
    document.getElementById("image-container").style.width = img_size + "em";
    document.getElementById("image-container").style.height = img_size + "em";


  }
}


