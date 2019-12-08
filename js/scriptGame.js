$(document).ready(function(){

var coconut = document.getElementById('coconut');

coconut.onclick = moveCoconut;

 function moveCoconut(){
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
coconut.style.top =  ( Math.floor(yMove)/2.5) - stageHeight + 'px';
}

if (stageWidth>xMove){
  // 1360>295
  coconut.style.left = xMove + 'px';
}else{
// 1360 -340 no no take cant stage away from move since bigger
coconut.style.left = (xMove - stageWidth) + 'px';
}
}

});
