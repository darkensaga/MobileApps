var UNO = new Firebase('https://blinding-fire-9286.firebaseIO.com');
var deck = new Firebase('https://blinding-fire-9286.firebaseIO.com/deck');
var _origDeck = new Firebase('https://blinding-fire-9286.firebaseIO.com/_origDeck');
var player1 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player1');
var player2 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player2');
var player3 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player3');
var player4 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player4');
var discard = new Firebase('https://blinding-fire-9286.firebaseIO.com/discard');
var current_player = new Firebase('https://blinding-fire-9286.firebaseIO.com/current_player');
var local_deck = [];
var local_origDeck = [];
var local_player1 = [];
var local_player2 = [];
var local_player3 = [];
var local_player4 = [];
var local_discard = [];
var local_current_player = 1;
var this_player = 1;

$(document).ready(function() {
	
	deck.on('value', function (snapshot) {
	  local_deck = snapshot.val().toString().split(",");
	});
	
	_origDeck.on('value', function (snapshot) {
	  local_origDeck = snapshot.val().toString().split(",");
	});
	
	player1.on('value', function (snapshot) {
	  local_player1 = snapshot.val().toString().split(",");
	  if(this_player==1){
	  	$(".playerarea").html("");
	  	for(var i=0; i<local_player1.length;i++)
	  	{
	  		$(".playerarea").css("left",(-55*((local_player1.length/2)))-28);
	  		var styleinput = "style=\"right:"+(-55*i)+"px;\"";
	  		$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" "+styleinput+"><img class=\"cardinhand\" id=\""+local_player1[i]
	  								+"\" src=\"img/"+local_player1[i]+".png\" /></div>");
	  	}
	  }
	  else{
	  	if(this_player==2){
	  		//right
	  		$(".rightplayercardcount").html(local_player1.length.toString());
	  		$("#rightplayerlabel").html("Player 1");
	  	}
	  	else if(this_player==3){
	  		//top
	  		$(".topplayercardcount").html(local_player1.length.toString());
	  		$("#topplayerlabel").html("Player 1");
	  	}
	  	else{
	  		//left
	  		$(".leftplayercardcount").html(local_player1.length.toString());
	  		$("#leftplayerlabel").html("Player 1");
	  	}
	  }
	});
	
	player2.on('value', function (snapshot) {
	  local_player2 = snapshot.val().toString().split(",");
	  if(this_player==2){
	  	$(".playerarea").html("");
	  	for(var i=0; i<local_player2.length;i++)
	  	{
	  		$(".playerarea").css("left",(-55*((local_player2.length/2)))-28);
	  		var styleinput = "style=\"right:"+(-55*i)+"px;\"";
	  		$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" "+styleinput+"><img class=\"cardinhand\" id=\""+local_player2[i]
	  								+"\" src=\"img/"+local_player2[i]+".png\" /></div>");
	  	}
	  }
	  else{
	  	if(this_player==3){
	  		//right
	  		$(".rightplayercardcount").html(local_player2.length.toString());
	  		$("#rightplayerlabel").html("Player 2");
	  	}
	  	else if(this_player==4){
	  		//top
	  		$(".topplayercardcount").html(local_player2.length.toString());
	  		$("#topplayerlabel").html("Player 2");
	  	}
	  	else{
	  		//left
	  		$(".leftplayercardcount").html(local_player2.length.toString());
	  		$("#leftplayerlabel").html("Player 2");
	  	}
	  }
	});
	
	player3.on('value', function (snapshot) {
	  local_player3 = snapshot.val().toString().split(",");
	  if(this_player==3){
	  	$(".playerarea").html("");
	  	for(var i=0; i<local_player3.length;i++)
	  	{
	  		$(".playerarea").css("left",(-55*((local_player3.length/2)))-28);
	  		var styleinput = "style=\"right:"+(-55*i)+"px;\"";
	  		$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" "+styleinput+"><img class=\"cardinhand\" id=\""+local_player3[i]
	  								+"\" src=\"img/"+local_player3[i]+".png\" /></div>");
	  	}
	  }
	  else{
	  	if(this_player==4){
	  		//right
	  		$(".rightplayercardcount").html(local_player3.length.toString());
	  		$("#rightplayerlabel").html("Player 3");
	  	}
	  	else if(this_player==1){
	  		//top
	  		$(".topplayercardcount").html(local_player3.length.toString());
	  		$("#topplayerlabel").html("Player 3");
	  	}
	  	else{
	  		//left
	  		$(".leftplayercardcount").html(local_player3.length.toString());
	  		$("#leftplayerlabel").html("Player 3");
	  	}
	  }
	});
	
	player4.on('value', function (snapshot) {
	  local_player4 = snapshot.val().toString().split(",");
	  if(this_player==4){
	  	$(".playerarea").html("");
	  	for(var i=0; i<local_player4.length;i++)
	  	{
	  		$(".playerarea").css("left",(-55*((local_player4.length/2)))-28);
	  		var styleinput = "style=\"right:"+(-55*i)+"px;\"";
	  		$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" "+styleinput+"><img class=\"cardinhand\" id=\""+local_player4[i]
	  								+"\" src=\"img/"+local_player4[i]+".png\" /></div>");
	  	}
	  }
	  else{
	  	if(this_player==1){
	  		//right
	  		$(".rightplayercardcount").html(local_player4.length.toString());
	  		$("#rightplayerlabel").html("Player 4");
	  	}
	  	else if(this_player==2){
	  		//top
	  		$(".topplayercardcount").html(local_player4.length.toString());
	  		$("#topplayerlabel").html("Player 4");
	  	}
	  	else{
	  		//left
	  		$(".leftplayercardcount").html(local_player4.length.toString());
	  		$("#leftplayerlabel").html("Player 4");
	  	}
	  }
	});
	
	discard.on('value', function (snapshot) {
	  local_discard = snapshot.val().toString().split(",");
	  if(local_discard.length > 0)
	  {
	  	$(".playedcard").attr("src","img/"+local_discard[local_discard.length-1]+".png");
	  }
	  else
	  {
	  	$(".playedcard").attr("src","img/cardback.png");
	  }
	});
	
	current_player.on('value', function (snapshot) {
	  local_current_player = snapshot.val();
	});
	
	
	$(".drawdeck").click(function() {
		if(this_player==local_current_player)
		{
			if(local_deck.length == 0)
			{
				var lastplayedcard = local_discard.pop();
				local_deck = local_discard.splice(0,local_discard.length);
				local_discard.push(lastplayedcard);
				UNO.update({"deck"    : local_deck });
                UNO.update({"discard" : local_discard });
			}
			var randomindex = Math.round(Math.random()*(local_deck.length-1));
			if(local_current_player==1)
			{
				local_player1.push(local_deck.splice(randomindex,1));
				UNO.update({"deck"    : local_deck });
                UNO.update({"player1" : local_player1 });
			}
			else if(local_current_player==2)
			{
				local_player2.push(local_deck.splice(randomindex,1));
				UNO.update({"deck"    : local_deck });
                UNO.update({"player2" : local_player2 });
			}
			else if(local_current_player==3)
			{
				local_player3.push(local_deck.splice(randomindex,1));
				UNO.update({"deck"    : local_deck });
                UNO.update({"player3" : local_player3 });
			}
			else
			{
				local_player4.push(local_deck.splice(randomindex,1));
				UNO.update({"deck"    : local_deck });
                UNO.update({"player4" : local_player4 });
			}
		}
	});
	
	$("#bluepicker").click(function() {
		alert('blue clicked');
	});
	
	$("#yellowpicker").click(function() {
		alert('yellow clicked');
	});
	
	$("#redpicker").click(function() {
		alert('red clicked');
	});
	
	$("#greenpicker").click(function() {
		alert('green clicked');
	});
	
	$("#newgame").click(function() {
		local_deck=[];
		local_deck = local_deck.concat(local_origDeck);
		local_player1 = [];
		local_player2 = [];
 		local_player3 = [];
 		local_player4 = [];
 		local_discard = [];
 		local_current_player = 1;
 		
 		for(var i=0; i<7; i++)
 		{
 			var randomindex = Math.round(Math.random()*(local_deck.length-1));
			local_player1.push(local_deck.splice(randomindex,1));
			randomindex = Math.round(Math.random()*(local_deck.length-1));
			local_player2.push(local_deck.splice(randomindex,1));
			randomindex = Math.round(Math.random()*(local_deck.length-1));
			local_player3.push(local_deck.splice(randomindex,1));
			randomindex = Math.round(Math.random()*(local_deck.length-1));
			local_player4.push(local_deck.splice(randomindex,1));
 		}
 		
 		var randomindex = Math.round(Math.random()*(local_deck.length-1));
		local_discard.push(local_deck.splice(randomindex,1));
 		
 		UNO.update({"deck"    : local_deck });
        UNO.update({"player1" : local_player1 });
        UNO.update({"player2" : local_player2 });
        UNO.update({"player3" : local_player3 });
        UNO.update({"player4" : local_player4 });
        UNO.update({"discard" : local_discard });
        UNO.update({"current_player" : local_current_player });
	});
	
});
