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