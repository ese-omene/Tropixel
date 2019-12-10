$(document).ready (function(){

$("h2").hover (
function (){$(this).css ('background','limegreen');},
function (){$(this).css ('background','#f5ea74');}
);
$("main a").hover (
function (){$ (this).css ('color','#f5ea74');},
function (){$(this).css ('color','limegreen');}
);
$("h3").hover (
function (){$(this).css ('background','limegreen');},
function (){$(this).css ('background','#ffffcc');}
);
$("#home").hover (
function (){$(this).css ('background','limegreen');},
function (){$(this).css ('background','#ffe200');}
);

})
