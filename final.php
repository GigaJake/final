<!DOCTYPE HTML>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="final.css">
		<script type="text/javascript">
			var player_choice = -1;
			var computer_choice = -1;
		</script>
		<script type="text/javascript" src="icon.js"></script>
		<script type="text/javascript" src="game.js"></script>
		<title>CIS 215 Final</title>
	</head>
	<body>
		<h1>Super Hyper-Ultimate Rock Paper Scissors!</h1>
		<h3>TEST YOUR MIGHT!</h3>
		<div class="content">
			<div class="shoot" id="CPU">CPU</div>
			<div class="shoot" id="P1">P1</div>
		</div>
			<p class="select"><b>DECIDE YOUR FATE!</b></p>
		<div class="content">
			<button onclick="setIcon(0)">Rock!</button>
			<button onclick="setIcon(1)">Paper!</button>
			<button onclick="setIcon(2)">Scissors!</button>
			<div id="thumbnail"></div>
			<br />
			<button onclick="countDown()" id="submit"><b>GO!</b></button>
		</div>
		<p id="result"></p>
	</body>
</html>
