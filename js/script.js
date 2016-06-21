var menu = document.querySelector(".menu");
var fixo = document.querySelector(".fixo");

menu.onclick = function(){
  this.classList.toggle("show");
}

onscroll = function(e){
  if(window.scrollY > innerHeight && !fixo.classList.contains("show")){
    fixo.classList.add("show");
  }
  else if(window.scrollY < innerHeight && fixo.classList.contains("show")){
    fixo.classList.remove("show");
  }
}
