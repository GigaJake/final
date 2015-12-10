function playGame(){

	var p_win = false;
	var tie = false;
	computer_choice = Math.floor(Math.random()*2);

	switch(computer_choice){
		case 0:
			CPU.innerHTML="<img src='cp_rock.png' height='200px' width='200px' />";
			break;
		case 1:
			CPU.innerHTML="<img src='cp_paper.png' height='200px' width='200px' />";
			break;
		case 2:
			CPU.innerHTML="<img src='cp_scissors.png' height='200px' width='200px' />";
			break;
	}

	switch(player_choice){
		case 0:
			P1.innerHTML="<img src='p1_rock.png' height='200px' width='200px' />";
			if(computer_choice==0)
				tie = true;
			else if(computer_choice==2)
				p_win = true;
			break;
		case 1:
			P1.innerHTML="<img src='p1_paper.png' height='200px' width='200px' />";
			if(computer_choice==1)
				tie = true;
			else if(computer_choice==0)
				p_win = true;
			break;
		case 2:
			P1.innerHTML="<img src='p1_scissors.png' height='200px' width='200px' />";
			if(computer_choice==2)
				tie = true;
			else if(computer_choice==1)
				p_win = true;
			break;
	}

	var result = document.getElementById("result");

	if(tie){
		bleh = "Tied";
		result.innerHTML="TIE!";
		result.style.color = "gray";
		CPU.style.border = "3px solid red";
		P1.style.border = "3px solid red";
	}
	else if(p_win){
		bleh = "Won";
		result.innerHTML="YOU WIN!";
		result.style.color = "green";
		CPU.style.border = "3px solid red";
		P1.style.border = "3px solid green";
	}
	else{
		bleh = "Lost";
		result.innerHTML="YOU LOSE!";
		result.style.color = "red";
		CPU.style.border = "3px solid green";
		P1.style.border = "3px solid red";
	}

	updateLog();

}
