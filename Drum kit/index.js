// document.querySelector("button").addEventListener("click", onClickListener);

var arr = document.querySelectorAll(".drum");
const tom1 = new Audio("sounds/tom-1.mp3")
const tom2 = new Audio("sounds/tom-2.mp3")
const tom3 = new Audio("sounds/tom-3.mp3")
const tom4 = new Audio("sounds/tom-4.mp3")
const crash = new Audio("sounds/crash.mp3")
const kickBass = new Audio("sounds/kick-bass.mp3")
const snare = new Audio("sounds/snare.mp3")

/*Buttons click events*/
for (var i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", onClickListener);
}

/*Keyboard events*/
document.addEventListener("keypress", function(event){
  alert("keypress" + event);
})

function onClickListener() {

  this.style.color = "blue";
  switch (this.innerHTML) {
    case "a":
      kickBass.play();
      break;
    case "w":
      crash.play();
      break;
    case "s":
      snare.play();
      break;
    case "d":
      tom1.play();
      break;
    case "j":
      tom2.play();
      break;
    case "k":
      tom3.play();
      break;
    case "l":
      tom4.play();
      break;
    default:

  }
}
