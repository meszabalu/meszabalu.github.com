function fbb( number ){
	if (number % 3 == 0){
		if( number % 5 == 0 ){
			return 'fizzbuzz';
		} else {
			return 'fizz';
		}
	} else if (number % 5 == 0){
		return 'buzz';
	} else if (number % 7 == 0){
		return 'bizz';
	} else {
		return number;
	}
}

function fizzBuzz(){
	var i;
	var list = document.getElementById('ezittegylista');
	for ( i = 1; i <= 100; i++) {
		var li = document.createElement('li');
		li.innerHTML = i + ".: " + fbb(i);
		list.appendChild(li);
	};	
}

document.addEventListener('DOMContentLoaded', fizzBuzz);