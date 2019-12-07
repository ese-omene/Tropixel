$(document).ready(function(){

var coconut = document.getElementById('coconut');

coconut.onclick = moveCoconut;

 function moveCoconut(){
   alert("you clicked the coconut");
var x = event.pageX;

var y = event.pageY;
var stageHeight = $('#stage').height()

var stageWidth = $('#stage').width()


//var stage = document.getElementById('stage')

//var stageHeight = stage.height();
//var stageHeight = stage.height()





var xMove =  Math.random()*1000
var yMove =  Math.random() *1000


console.log(xMove, stageWidth, yMove, stageHeight)
if (yMove<stageWidth&&xMove<stageHeight){

  coconut.style.left = yMove + 'px';
coconut.style.top = xMove + 'px';
}else{

  coconut.style.left = (yMove - stageHeight) + 'px';
coconut.style.top = (xMove - stageWidth) + 'px';
}


}

});
