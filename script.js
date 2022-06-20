"use strict";

var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("load").style.display = "none";
  document.getElementById("mainBod").style.display = "block";
}

///ATTEMPS AT TOGGLE SHIT

// const comp = document.querySelectorAll(".comp");
// const btnsShowGuide = document.querySelectorAll(".box");

// const showGuide = function () {
//   comp.classList.add("active");
// };

// for (let i = 0; i < .length; i++) {
//   btnsShowGuide[i].addEventListener("click", showGuide[i]);
// }
/*
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
*/

// function setVisibility(id, visibility) {
//     document.getElementById(id).style.display = visibility;
//   }
