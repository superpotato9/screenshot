// API for get requests
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


