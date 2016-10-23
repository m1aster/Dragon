// 1. Проблема Голов и Ног

function animals(data) {
 var heads = data[0];
 	var legs = data[1];

 	var result = []; 
 	
 	// result[0] - Chickens, 
 	// result[1] - Cows
 	result[1] = (legs - 2*heads)/2;
	result[0] = heads - result[1];

	return result;
}

console.log( animals([71,200]) );


// 2. Возможные реакции:

function howManyAnimals(number){ 
	var reaction = ["Чего так мало?", "Более чем достаточно", "Почему их так много", "Ого, 101 далматинец!", "Зачем мне собачья ферма"];
	if (number <= 10) { 
		return reaction[0];
	} else if (number <= 50){
	return reaction[1];
}
 else if (number <= 100) { 
		return reaction[2];
} 
 else if (number == 101) { 
		return reaction[2] + ' ' + reaction[3];
}
 else { 
 	return reaction[4];
 }
}
console.log( howManyAnimals(105) );

3. Fizz Buzz.

for (var i = 1; i <= 100; i++) {

	if ( i % 3 == 0 && i % 5 == 0) {
		console.log("Fizz Buzz");
	}
	else if ( i % 3 == 0) {
		console.log("Fizz");
	}

	else if ( i % 5 == 0) {
		console.log("Buzz");
	}

	else {
		console.log(i);
	}
}

