"use strict";

var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("load").style.display = "none";
  document.getElementById("mainBod").style.display = "block";
}
