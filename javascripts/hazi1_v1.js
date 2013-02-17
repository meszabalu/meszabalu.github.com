var bt;
var fulltextContainer;
var currentContainer;
var allText; //ebbe tároljuk az összed eddig leütött billentyűkaraktert

function keyPress(ev){
	var ch = String.fromCharCode(ev.keyCode);
	currentContainer.innerHTML = ch;
	allText += ch;
}

function displayText(){
	fulltextContainer.innerHTML = allText;
}

function init(){
	bt = document.getElementById('writefull');
	fulltextContainer = document.getElementById('fulltext');
	currentContainer = document.getElementById('current');
	allText = "";
	document.onkeypress = keyPress;
	bt.onclick = displayText;
}

document.addEventListener('DOMContentLoaded', init);