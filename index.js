'use strict';

//LOADER
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById('load').style.display = 'none';
  document.getElementById('mainBod').style.display = 'block';
}

//MORE TEXT

// function showText() {
//   const extraText = document.querySelector('.more');
//   if (extraText.style.display === 'none') {
//     extraText.style.display = 'block';
//   } else {
//     extraText.style.display = 'none';
//   }
// }

function readMore(comp) {
  let dots = document.querySelector(`.tab-pane[data-comp="${comp}"] .dots`);
  let moreText = document.querySelector(`.tab-pane[data-comp="${comp}"] .more`);
  let moreText2 = document.querySelector(
    `.tab-pane[data-comp="${comp}"] .more2`
  );
  let btnText = document.querySelector(
    `.tab-pane[data-comp="${comp}"] .show-more`
  );

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.textContent = 'Read more';
    moreText.style.display = 'none';
    moreText2.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.textContent = 'Read less';
    moreText.style.display = 'inline';
    moreText2.style.display = 'inline';
  }
}
