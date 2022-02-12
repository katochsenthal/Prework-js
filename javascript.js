// box1 bigger
document.getElementById("button1").addEventListener("click", function () {
  document.getElementById("box").style.height = "300px";
});

// box2 blue
document.getElementById("button2").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "Blue";
});

// box3 fade
document.getElementById("button3").addEventListener("click", function () {
  document.getElementById("box").style.opacity = "0.5";
});

// box4 reset

document.getElementById("button4").addEventListener("click", function () {
  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.backgroundColor = "Orange";
  document.getElementById("box").style.opacity = "1";
});
