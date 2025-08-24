alert("Welcome to the Drum Kit!");
for(let i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

addEventListener("keydown", function(event) {
  let key = event.key;
  playSound(key);
  buttonAnimation(key);
});
playSound = (key) => {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
buttonAnimation = (currentKey) => {
  let activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

const music=['l', 'j', 'w', 'a', 'l', 'j', 's', 'd', 'l', 'k', 'j', 'l', 'w', 'a', 's', 'j', 'l'];

document.querySelector(".play").addEventListener("click", function() {
  for(let i = 0; i < music.length; i++) {
    setTimeout(() => {
      playSound(music[i]);
      buttonAnimation(music[i]);
    }, i * 100); 
  }
});