function updateLog(){

	var log = document.getElementById("log");
	var text = log.value;

	games_played++;

	if(games_played==1){
		log.value = games_played + ": " + getPlay(computer_choice) + " vs " + getPlay(player_choice) + " - " + bleh;
	}
	else{
		log.value = text + "\n" + games_played + ": " + getPlay(computer_choice) + " vs " + getPlay(player_choice) + " - " + bleh;
		log.style.height = games_played*20 + "px";
	}

}

function getPlay(value){
	switch(value){
		case 0:
			return "Rock";
			break;
		case 1:
			return "Paper";
			break;
		case 2:
			return "Scissors";
			break;
	}
}
