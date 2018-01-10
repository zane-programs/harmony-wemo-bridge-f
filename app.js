var wemore = require('wemore');
var keypress = require('keypress');

keypress(process.stdin);

process.stdin.on('keypress', function(ch, key) {
	if (key && key.ctrl && key.alt && key.name === "1") {
		console.log("yo dawg");
	}
});
