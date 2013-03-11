// exercise01a
function pushFirstsN(n){
	var array = [];
	for (var i=1; i<=n; i++)
		array.push(i);
	return array;
}

// exercise01b
function filterOdd(array){
	return array.filter(function(item){return (item % 2 === 0);});
}

// exercise01c
function double(array){
	return array.map(function(item) {return item*2;});
}

// exercise01d
function filterMod4(array){
	return array.filter(function(item){return item %4 === 0;});
}

// exercise01e
function sumArray(array){
	return array.reduce(function(prev, cur) {return prev + cur;});
}