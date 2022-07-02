'use strict';

//LOADER
var myVar;
function load() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("load").style.transform = "translateY(-500vh)";
}

//NAVBAR
jQuery(document).on('scroll', function () {
  if ($(document).scrollTop() > 120) {
    $('.navbar').css('background-color', '#222');
    $('.nav-link').css('color', '#fff');
    $('.nav-logo').css('filter', 'none');
  } else {
    $('.navbar').css('background-color', 'transparent');
    $('.nav-link').css('color', '#000');
    $('.nav-logo').css('filter', 'invert(100%)');
  }
});
