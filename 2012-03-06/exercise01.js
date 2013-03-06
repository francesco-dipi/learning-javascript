var out = "";
for (var i = 1; i <= 10; i++){
	for (var j = 1; j <= 10; j++)
		out += i*j + "\t";
	out += "\n";
}
console.log(out);