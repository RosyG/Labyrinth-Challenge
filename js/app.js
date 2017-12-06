window.onload = function() {
  document.onkeyup = muestraInformacion;
}

function muestraInformacion(e) {
  var evento = window.event || e;
  var keyCode =evento.keyCode;

console.log(keyCode);
  info.innerHTML + keyCode;

  var stepUp=0;
  var up = 38;
  var right =39;
  var down = 40;
  var left = 37;
  if (keyCode==up) {

    moveUp();
  }if (keyCode==right) {
    moveRight();
  }if (keyCode==down){
    moveDown();
  }if (keyCode==left){
    moveLeft();
  }else{
    console.log("no es arriba");
  }


}


var positionVertical=0;
var positionHorizontal=0;

function moveUp (){
  positionVertical= positionVertical+56;
  var teseo = document.getElementById("teseo");
  teseo.style.bottom=positionVertical+"px";

}

function moveDown (){
  positionVertical= positionVertical-56;
  var teseo = document.getElementById("teseo");
  teseo.style.bottom=positionVertical+"px";
}
function moveRight (){
  positionHorizontal= positionHorizontal+56;
  var teseo = document.getElementById("teseo");
  teseo.style.left=positionHorizontal+"px";
}
function moveLeft (){
  //console.log(event.target.childNodes[1].childNodes[3].childNodes.this);
  console.log(this.focus);
  positionHorizontal= positionHorizontal-56;
  var teseo = document.getElementById("teseo");
  teseo.style.left=positionHorizontal+"px";
}
console.log(positionHorizontal);
console.log(positionVertical);

//img.classList.contains(wall);
