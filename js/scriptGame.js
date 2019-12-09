$(document).ready(function(){


//var btn = document.getElementById('btn')
//var stage = document.getElementById('stage');
//var coconut = document.getElementById('coconut'),

//player starts with 4 tries
count = 4;
$('#replay').hide();
$('#coconut').hide();
play.innerHTML = "Click to Play";
msg.innerHTML = "You gotta be quick! you have " + count + " chances"
replay.innerHTML = "Replay";
play.onclick = letsPlay;
//click button to start the game
function letsPlay(){
$('#play').hide();
  $('#coconut').show();
  document.getElementById("stage").style.cursor = "pointer";
}

coconut.onmouseover = moveCoconut;

 function moveCoconut(){


//keep track of how many tries are left//
   count -= 1;
  // console.log(count)

  if (count === 3){
   msg.innerHTML = "that was close! you have  " + count +" tries left";
  }
  if (count === 2){
   msg.innerHTML = " you almost had him!! you have  " + count +" tries left";
}
  if (count === 1){
   msg.innerHTML = "last try buddy! you have  " + count +" try left";
}

if (count === 0){
  $('#coconut').hide();
  msg.innerHTML = "";
  niceTry.innerHTML = "better luck next time!";
  $('#replay').show();

}

  // alert("you clicked the coconut");
var x = event.pageX;

var y = event.pageY;
var stageHeight = $('#stage').height()

var stageWidth = $('#stage').width()


var xMove =  Math.random()*1000
var yMove =  Math.random() *1000

console.log("the stage is " + stageWidth + "wide and " + stageHeight + " in height")
console.log("the coconut moved " + xMove+ "left and "+ yMove + "up/down")

if (stageHeight>yMove){
// 300>250
coconut.style.top = yMove + 'px';
}else if (yMove<500){
//  400
coconut.style.top = (yMove - stageHeight) + 'px';
} else {
coconut.style.top =  ( (Math.floor(yMove))/2.5) - stageHeight + 'px';
}

if (stageWidth>xMove){
  // 1360>295
  coconut.style.left = xMove + 'px';
}else{
// 1360 -340 no no take cant stage away from move since bigger
coconut.style.left = (xMove - stageWidth) + 'px';
}
}

 replay.onclick = letsReplay;
function letsReplay(){

  window.location.reload();


}

});
