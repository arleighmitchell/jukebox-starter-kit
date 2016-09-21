i = 0;

$(document).ready(function() {

	document.getElementById("next").addEventListener("click", function(){
		var audio = $('#audio');
		

		if (i < music.songs.length) {		
			audio.attr("src", music.songs[i].src);

			i = i + 1;
			console.log(i);
		} else {
			i = 0;
			console.log(i);
		}

		audio[0].play();	
	});

	document.getElementById("pause").addEventListener("click", function(){
		var audio = $('#audio');

		audio[0].pause();
	});

	var Music = function() {
		this.songs = []
	};

	var Audio = function() {
		this.src = ""
	};

	var music = new Music();
	var song1 = new Audio();
	var song2 = new Audio();
	var song3 = new Audio();

	song1.src = "assets/music/alwaysblink182.mp3"
	song2.src = "assets/music/boredtodeathblink182.mp3"
	song3.src = "assets/music/alwaysblink182.mp3"

	music.songs.push(song1);
	music.songs.push(song2);
	music.songs.push(song3);

});