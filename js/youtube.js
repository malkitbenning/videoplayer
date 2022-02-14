document.getElementById("rec-1").onclick = function() {
  document.getElementById("con-1").style.display = "inline";
  document.getElementById("con-2").style.display = "none";
  document.getElementById("con-3").style.display = "none";
  document.getElementById("con-4").style.display = "none";
};

document.getElementById("rec-2").onclick = function() {
  document.getElementById("con-2").style.display = "inline";
  document.getElementById("con-1").style.display = "none";
  document.getElementById("con-3").style.display = "none";
  document.getElementById("con-4").style.display = "none";
};

document.getElementById("rec-3").onclick = function() {
  document.getElementById("con-3").style.display = "inline";
  document.getElementById("con-1").style.display = "none";
  document.getElementById("con-2").style.display = "none";
  document.getElementById("con-4").style.display = "none";
};

document.getElementById("rec-4").onclick = function() {
  document.getElementById("con-4").style.display = "inline";
  document.getElementById("con-1").style.display = "none";
  document.getElementById("con-2").style.display = "none";
  document.getElementById("con-3").style.display = "none";
};


