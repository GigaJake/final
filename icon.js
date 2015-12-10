/* 0 Rock, 1 Paper, 2 Scissors */
function setIcon(value){

	var icon = document.getElementById("thumbnail");
	player_choice = value;

	switch(value){
		case 0:
			icon.innerHTML="<img src='p1_rock.png' height='50' width='50'/>"
			break;
		case 1:
			icon.innerHTML="<img src='p1_paper.png' height='50' width='50' />"
			break;
		case 2:
			icon.innerHTML="<img src='p1_scissors.png' height='50' width='50' />"
			break;
		default:
			break;
	}

}
