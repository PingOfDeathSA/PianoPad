alert("Hello");



var numberOfDrumButtons = document.querySelectorAll(".jdrum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}


document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "q":
      var soundd = new Audio("sounds/sound2.mp3");
      soundd.play();
      break;

    case "w":
      var tom2 = new Audio("sounds/PERC 16.wav");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/Piano1.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/Piano2.mp3');
      tom4.play();
      break;

    case "f":
      var snare = new Audio('sounds/Piano3.mp3');
      snare.play();
      break;

    case "g":
      var crash = new Audio('sounds/Piano4.mp3');
      crash.play();
      break;

    case "h":
      var kick = new Audio('sounds/Piano5.mp3');
      kick.play();
      break;

    case "j":
       var kick = new Audio('sounds/Piano6.mp3');
        kick.play();
        break;
     case "k":
         var kick = new Audio('sounds/Piano7.mp3');
          kick.play();
          break;
    case "l":
        var kick = new Audio('sounds/Piano8.mp3');
        kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
