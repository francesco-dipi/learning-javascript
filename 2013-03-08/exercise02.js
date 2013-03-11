// exercise02a
function pushNRandom(n){
	var array = [];
	for (var i=1; i<=n; i++)
		array.push(Math.round(Math.random() * 100));
	return array;
}

// exercise02b
function filterEven(array){
	return array.filter(function(item){return (item % 2 !== 0);});
}

// exercise02c
function sort(array){
	return array.sort();
}