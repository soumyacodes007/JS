//
var a = Math.random();
var  c1 = Math.floor(Math.random()*256);
var  c2 = Math.floor(Math.random()*256);
var  c3 = Math.floor(Math.random()*256);

//console.log(c1,c2,c3);

var btn = document.querySelector(".btn")
console.log(btn);
btn.addEventListener("click", function() {
  var  c1 = Math.floor(Math.random()*256);
  var  c2 = Math.floor(Math.random()*256);
  var  c3 = Math.floor(Math.random()*256);
  myCircle.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

})


