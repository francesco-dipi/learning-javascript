function identity(n){
	var line = "";
	for (var i = 0; i < n; i++){
		for (var j = 0; j < n; j++)
			i === j ? line += "1": line += "0";
		console.log(line);
		line = "";
	}
}