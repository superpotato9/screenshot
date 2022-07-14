// API for get requests
fetchRes = fetch(
  "https://owen-wilson-wow-api.herokuapp.com/wows/random");
// fetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
  res.json()).then(d => {
  //console.log(d)
  element = d
  //document.getElementById("example").innerHTML =  element;
  var iterator = element.values();

  // Here all the e//lements of the array is being printed.
  for (let elements of iterator) {
    //console.log(elements);
    first_object = elements
  }
  console.log(first_object);



})
