var menu = document.querySelector('.menu')
var fixo = document.querySelector('.fixo')
var link = document.querySelectorAll('.navega a')
var video = document.getElementById('video')

function scrollE () {
  if ((window.scrollY + 80) > innerHeight && !fixo.classList.contains('show')) {
    fixo.classList.add('show')
    menu.classList.add('fixed')
  } else if ((window.scrollY + 80) < innerHeight && fixo.classList.contains('show')) {
    fixo.classList.remove('show')
    menu.classList.remove('fixed')
  }
}

menu.onclick = function () {
  this.classList.toggle('show')
}

onscroll = function (e) {
  scrollE()
}

onload = function () {
  scrollE()
  setTimeout(function() {
    video.play();
    video.classList.add('playing');
  }, 150);
}
