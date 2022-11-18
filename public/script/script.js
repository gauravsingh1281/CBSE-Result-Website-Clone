function copyRightYear() {
  const d = new Date();
  let year = d.getFullYear();
  document.getElementById("yr").innerHTML = year;
}

copyRightYear();

function playSound() {
  var audio = new Audio("sound/green.mp3");
  audio.play();
}
