'use strict';

//LOADER
var myVar;
function load() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById('load').style.display = 'none';
  document.getElementById('mainBod').style.display = 'block';
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

//TIMER

const countdown = () => {
  const countDate = new Date('August 3, 2022 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //TIME WORK
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //CALCULATION
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector('.day').innerText = textDay;
  document.querySelector('.hour').innerText = textHour;
  document.querySelector('.minute').innerText = textMinute;
  document.querySelector('.second').innerText = textSecond;
};

setInterval(countdown, 1000);
