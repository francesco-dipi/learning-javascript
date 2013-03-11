// exercise04
function select (data, key, values) {
	var out = [];
	for (var elem in data)
		for (var value in values)
			if (data[elem][key] === values[value])
				out.push(data[elem]);
			else
				console.log(data[elem] + "\t" + data[elem][key] +  " - " + values[value]);
	return out;
}