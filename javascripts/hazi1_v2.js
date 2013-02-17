var handlerObj = {
	bt : null,
	fulltextContainer : null,
	currentContainer : null,
	allText : null,
	keyPress : function(ev){
		var ch = String.fromCharCode(ev.keyCode);
		handlerObj.currentContainer.innerHTML = ch;
		handlerObj.allText += ch;
	},
	displayText : function(){
		handlerObj.fulltextContainer.innerHTML = handlerObj.allText;
	},
	init : function(){
		handlerObj.bt = document.getElementById('writefull');
		handlerObj.fulltextContainer = document.getElementById('fulltext');
		handlerObj.currentContainer = document.getElementById('current');
		handlerObj.allText = "";
		document.onkeypress = handlerObj.keyPress;
		handlerObj.bt.onclick = handlerObj.displayText;
	}
};

document.addEventListener('DOMContentLoaded', handlerObj.init);