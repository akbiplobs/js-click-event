for(var i=0; i<3; i++){
  document.querySelectorAll(".mybtn")[i].addEventListener("click", function(){
       var text = this.innerHTML;
       console.log(text);
      audioplay(text);
  });
}
function audioplay(text){
  switch (text) {
    case "A":
    var audio = new Audio('sounds/a.mp3');
    audio.play();
    break;

    case "Biplob":
    var audio = new Audio('sounds/b.mp3');
    audio.play();
    break;

    case "C":
    var audio = new Audio('sounds/c.mp3');
    audio.play();
    break;
   }
}
