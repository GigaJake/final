function countDown(){

	if(player_choice==-1){
		alert("No fate decided!");
		return;
	}

	var count = 3;
	var start = setInterval(function(){run()},1000);

	function run(){
		if(count != 0){
			CPU.innerHTML=count;
			P1.innerHTML=count;
			count--;
		}
		else{
			CPU.innerHTML="!!!";
			P1.innerHTML="!!!";
			clearInterval(start);
			playGame();
		}
	}

}
