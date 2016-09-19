var Music = function() {
	this.audio = [];
};

var Audio = function() {
	this.src = "";
};

var music = new Music();
var audio1 = new Audio();

audio1.src = "assets/music/alwaysblink182.mp3"

music.audio.push(audio1);