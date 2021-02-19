var len = document.querySelectorAll(".drum").length;

//for button pressed
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var text = this.innerHTML;
    makeSoun(text);

    buttonPressed(text);
  });
}

//for keys pressed
document.addEventListener("keydown", function (e){
  var text = e.key;
  makeSoun(text);
  buttonPressed(text);
})

function makeSoun(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var cras = new Audio("sounds/crash.mp3");
      cras.play();
      break;
    default:
      console.log(key);
  }
}

function buttonPressed(key){

  var buttontobePressed = document.querySelector("."+ key);
  buttontobePressed.classList.add("pressed");

  //need to remove now

  setTimeout(function (){
    buttontobePressed.classList.remove("pressed");
  },101);

}
