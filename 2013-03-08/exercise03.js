// exercise03a
// Capitalize each letter of word
function capitalize(word){
	return word.toUpperCase();
}
// Capitalize only the first letter of each word
function capitalizeFirst(word){
	return word[0].toUpperCase() + word.substr(1);
}

// exercise03b
function capitalizeAll(text){
	return capitalize(text);
}
function capitalizeAllFirst(text){
	return text.split(" ").map(function(item){ return capitalizeFirst(item)}).join(" ");
}

function capitalizeText(){
	return capitalizeAll("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
}
function capitalizeTextFirst(){
	return capitalizeAllFirst("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
}
