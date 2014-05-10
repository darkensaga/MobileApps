var UNO = new Firebase('https://blinding-fire-9286.firebaseIO.com');
var deck = new Firebase('https://blinding-fire-9286.firebaseIO.com/deck');
var _origDeck = new Firebase('https://blinding-fire-9286.firebaseIO.com/_origDeck');
var player1 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player1');
var player2 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player2');
var player3 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player3');
var player4 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player4');
var discard = new Firebase('https://blinding-fire-9286.firebaseIO.com/discard');
var current_player = new Firebase('https://blinding-fire-9286.firebaseIO.com/current_player');
var last_played_color = new Firebase('https://blinding-fire-9286.firebaseIO.com/last_played_color');
var player_order = new Firebase('https://blinding-fire-9286.firebaseIO.com/player_order');
var local_deck = [];
var local_origDeck = [];
var local_player1 = [];
var local_player2 = [];
var local_player3 = [];
var local_player4 = [];
var local_discard = [];
var local_current_player = 1;
var local_last_played_color = "";
var local_player_order = "normal";
var this_player = 0;

$(document).ready(function() {

	deck.on('value', function(snapshot) {
		local_deck = snapshot.val().toString().split(",");
	});

	_origDeck.on('value', function(snapshot) {
		local_origDeck = snapshot.val().toString().split(",");
	});

	player1.on('value', function(snapshot) {
		if (snapshot.val() == null) {
			alert("Player 1 has won the game!");
		}
		local_player1 = snapshot.val().toString().split(",");

		if (this_player == 1) {
			$(".playerarea").html("");
			for (var i = 0; i < local_player1.length; i++) {
				$(".playerarea").css("left", (-55 * ((local_player1.length / 2))) - 28);
				var styleinput = "style=\"right:" + (-55 * i) + "px;\"";
				$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" " + styleinput + "><img class=\"cardinhand\" id=\"" + local_player1[i] + "\" src=\"img/" + local_player1[i] + ".png\" /></div>");
			}
		} else {
			if (this_player == 2) {
				//right
				$(".rightplayercardcount").html(local_player1.length.toString());
				$("#rightplayerlabel").html("Player 1");
			} else if (this_player == 3) {
				//top
				$(".topplayercardcount").html(local_player1.length.toString());
				$("#topplayerlabel").html("Player 1");
			} else {
				//left
				$(".leftplayercardcount").html(local_player1.length.toString());
				$("#leftplayerlabel").html("Player 1");
			}
		}
	});

	player2.on('value', function(snapshot) {
		if (snapshot.val() == null) {
			alert("Player 2 has won the game!");
		}
		local_player2 = snapshot.val().toString().split(",");
		if (this_player == 2) {
			$(".playerarea").html("");
			for (var i = 0; i < local_player2.length; i++) {
				$(".playerarea").css("left", (-55 * ((local_player2.length / 2))) - 28);
				var styleinput = "style=\"right:" + (-55 * i) + "px;\"";
				$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" " + styleinput + "><img class=\"cardinhand\" id=\"" + local_player2[i] + "\" src=\"img/" + local_player2[i] + ".png\" /></div>");
			}
		} else {
			if (this_player == 3) {
				//right
				$(".rightplayercardcount").html(local_player2.length.toString());
				$("#rightplayerlabel").html("Player 2");
			} else if (this_player == 4) {
				//top
				$(".topplayercardcount").html(local_player2.length.toString());
				$("#topplayerlabel").html("Player 2");
			} else {
				//left
				$(".leftplayercardcount").html(local_player2.length.toString());
				$("#leftplayerlabel").html("Player 2");
			}
		}
	});

	player3.on('value', function(snapshot) {
		if (snapshot.val() == null) {
			alert("Player 3 has won the game!");
		}
		local_player3 = snapshot.val().toString().split(",");
		if (this_player == 3) {
			$(".playerarea").html("");
			for (var i = 0; i < local_player3.length; i++) {
				$(".playerarea").css("left", (-55 * ((local_player3.length / 2))) - 28);
				var styleinput = "style=\"right:" + (-55 * i) + "px;\"";
				$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" " + styleinput + "><img class=\"cardinhand\" id=\"" + local_player3[i] + "\" src=\"img/" + local_player3[i] + ".png\" /></div>");
			}
		} else {
			if (this_player == 4) {
				//right
				$(".rightplayercardcount").html(local_player3.length.toString());
				$("#rightplayerlabel").html("Player 3");
			} else if (this_player == 1) {
				//top
				$(".topplayercardcount").html(local_player3.length.toString());
				$("#topplayerlabel").html("Player 3");
			} else {
				//left
				$(".leftplayercardcount").html(local_player3.length.toString());
				$("#leftplayerlabel").html("Player 3");
			}
		}
	});

	player4.on('value', function(snapshot) {
		if (snapshot.val() == null) {
			alert("Player 4 has won the game!");
		}
		local_player4 = snapshot.val().toString().split(",");
		if (this_player == 4) {
			$(".playerarea").html("");
			for (var i = 0; i < local_player4.length; i++) {
				$(".playerarea").css("left", (-55 * ((local_player4.length / 2))) - 28);
				var styleinput = "style=\"right:" + (-55 * i) + "px;\"";
				$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" " + styleinput + "><img class=\"cardinhand\" id=\"" + local_player4[i] + "\" src=\"img/" + local_player4[i] + ".png\" /></div>");
			}
		} else {
			if (this_player == 1) {
				//right
				$(".rightplayercardcount").html(local_player4.length.toString());
				$("#rightplayerlabel").html("Player 4");
			} else if (this_player == 2) {
				//top
				$(".topplayercardcount").html(local_player4.length.toString());
				$("#topplayerlabel").html("Player 4");
			} else {
				//left
				$(".leftplayercardcount").html(local_player4.length.toString());
				$("#leftplayerlabel").html("Player 4");
			}
		}
	});

	discard.on('value', function(snapshot) {
		local_discard = snapshot.val().toString().split(",");
		if (local_discard.length > 0) {
			$(".playedcard").attr("src", "img/" + local_discard[local_discard.length - 1] + ".png");
		} else {
			$(".playedcard").attr("src", "img/cardback.png");
		}
	});

	current_player.on('value', function(snapshot) {
		local_current_player = snapshot.val();
		$(".turnlabel").html("Turn: Player " + local_current_player.toString());
	});

	last_played_color.on('value', function(snapshot) {
		local_last_played_color = snapshot.val();
		if (local_last_played_color == "Y") {
			$("#bluepicker").css("opacity", "0.3");
			$("#yellowpicker").css("opacity", "1");
			$("#redpicker").css("opacity", "0.3");
			$("#greenpicker").css("opacity", "0.3");
		} else if (local_last_played_color == "R") {
			$("#bluepicker").css("opacity", "0.3");
			$("#yellowpicker").css("opacity", "0.3");
			$("#redpicker").css("opacity", "1");
			$("#greenpicker").css("opacity", "0.3");
		} else if (local_last_played_color == "G") {
			$("#bluepicker").css("opacity", "0.3");
			$("#yellowpicker").css("opacity", "0.3");
			$("#redpicker").css("opacity", "0.3");
			$("#greenpicker").css("opacity", "1");
		} else {
			$("#bluepicker").css("opacity", "1");
			$("#yellowpicker").css("opacity", "0.3");
			$("#redpicker").css("opacity", "0.3");
			$("#greenpicker").css("opacity", "0.3");
		}
	});

	player_order.on('value', function(snapshot) {
		local_player_order = snapshot.val();
	});

	$(".drawdeck").click(function() {
		if (this_player == local_current_player) {
			if (local_deck.length == 0) {
				var lastplayedcard = local_discard.pop();
				local_deck = local_discard.splice(0, local_discard.length);
				local_discard.push(lastplayedcard);
				UNO.update({
					"deck" : local_deck
				});
				UNO.update({
					"discard" : local_discard
				});
			}
			var randomindex = Math.round(Math.random() * (local_deck.length - 1));
			if (local_current_player == 1) {
				local_player1.push(local_deck.splice(randomindex, 1));
				UNO.update({
					"deck" : local_deck
				});
				UNO.update({
					"player1" : local_player1
				});
			} else if (local_current_player == 2) {
				local_player2.push(local_deck.splice(randomindex, 1));
				UNO.update({
					"deck" : local_deck
				});
				UNO.update({
					"player2" : local_player2
				});
			} else if (local_current_player == 3) {
				local_player3.push(local_deck.splice(randomindex, 1));
				UNO.update({
					"deck" : local_deck
				});
				UNO.update({
					"player3" : local_player3
				});
			} else {
				local_player4.push(local_deck.splice(randomindex, 1));
				UNO.update({
					"deck" : local_deck
				});
				UNO.update({
					"player4" : local_player4
				});
			}
		}
	});

	$("#newgame").click(function() {
		local_deck = [];
		local_deck = local_deck.concat(local_origDeck);
		local_player1 = [];
		local_player2 = [];
		local_player3 = [];
		local_player4 = [];
		local_discard = [];
		local_current_player = 1;
		local_player_order = "normal";

		for (var i = 0; i < 7; i++) {
			var randomindex = Math.round(Math.random() * (local_deck.length - 1));
			local_player1.push(local_deck.splice(randomindex, 1));
			randomindex = Math.round(Math.random() * (local_deck.length - 1));
			local_player2.push(local_deck.splice(randomindex, 1));
			randomindex = Math.round(Math.random() * (local_deck.length - 1));
			local_player3.push(local_deck.splice(randomindex, 1));
			randomindex = Math.round(Math.random() * (local_deck.length - 1));
			local_player4.push(local_deck.splice(randomindex, 1));
		}

		var randomindex = Math.round(Math.random() * (local_deck.length - 1));
		local_discard.push(local_deck.splice(randomindex, 1));
		while (local_discard[local_discard.length - 1].toString().charAt(0) == "W") {
			var randomindex = Math.round(Math.random() * (local_deck.length - 1));
			local_discard.push(local_deck.splice(randomindex, 1));
		}

		local_last_played_color = local_discard[local_discard.length - 1].toString().charAt(0);

		UNO.update({
			"deck" : local_deck
		});
		UNO.update({
			"player1" : local_player1
		});
		UNO.update({
			"player2" : local_player2
		});
		UNO.update({
			"player3" : local_player3
		});
		UNO.update({
			"player4" : local_player4
		});
		UNO.update({
			"discard" : local_discard
		});
		UNO.update({
			"current_player" : local_current_player
		});
		UNO.update({
			"last_played_color" : local_last_played_color
		});
		UNO.update({
			"player_order" : local_player_order
		});
	});

	$(".playerarea").on("click", ".cardinhand", function(event) {
		if (local_current_player == this_player) {
			if ((event.target.id.charAt(0) == local_discard[local_discard.length - 1].toString().charAt(0)) || (event.target.id.charAt(1) == local_discard[local_discard.length - 1].toString().charAt(1)) || (event.target.id.charAt(0) == "W") || (event.target.id.charAt(0) == local_last_played_color)) {

				if (local_current_player == 1) {
					local_discard.push(local_player1.splice(local_player1.indexOf(event.target.id), 1));
					local_last_played_color = local_discard[local_discard.length - 1].toString().charAt(0);
					UNO.update({
						"last_played_color" : local_last_played_color
					});
					UNO.update({
						"discard" : local_discard
					});
					UNO.update({
						"player1" : local_player1
					});
				} else if (local_current_player == 2) {
					local_discard.push(local_player2.splice(local_player2.indexOf(event.target.id), 1));
					local_last_played_color = local_discard[local_discard.length - 1].toString().charAt(0);
					UNO.update({
						"last_played_color" : local_last_played_color
					});
					UNO.update({
						"discard" : local_discard
					});
					UNO.update({
						"player2" : local_player2
					});
				} else if (local_current_player == 3) {
					local_discard.push(local_player3.splice(local_player3.indexOf(event.target.id), 1));
					local_last_played_color = local_discard[local_discard.length - 1].toString().charAt(0);
					UNO.update({
						"last_played_color" : local_last_played_color
					});
					UNO.update({
						"discard" : local_discard
					});
					UNO.update({
						"player3" : local_player3
					});
				} else {
					local_discard.push(local_player4.splice(local_player4.indexOf(event.target.id), 1));
					local_last_played_color = local_discard[local_discard.length - 1].toString().charAt(0);
					UNO.update({
						"last_played_color" : local_last_played_color
					});
					UNO.update({
						"discard" : local_discard
					});
					UNO.update({
						"player4" : local_player4
					});
				}

				if (event.target.id.charAt(0) == "W") {
					//wild card played
					//select a color
					$("#colorchoser").toggle();

					if (event.target.id.charAt(1) == "4") {
						//next player draws 4
						var nextplayer = get_next_player(local_current_player);
						for (var i = 0; i < 4; i++) {
							if (local_deck.length == 0) {
								var lastplayedcard = local_discard.pop();
								local_deck = local_discard.splice(0, local_discard.length);
								local_discard.push(lastplayedcard);
								UNO.update({
									"deck" : local_deck
								});
								UNO.update({
									"discard" : local_discard
								});
							}
							var randomindex = Math.round(Math.random() * (local_deck.length - 1));
							if (nextplayer == 1) {
								local_player1.push(local_deck.splice(randomindex, 1));
								UNO.update({
									"deck" : local_deck
								});
								UNO.update({
									"player1" : local_player1
								});
							} else if (nextplayer == 2) {
								local_player2.push(local_deck.splice(randomindex, 1));
								UNO.update({
									"deck" : local_deck
								});
								UNO.update({
									"player2" : local_player2
								});
							} else if (nextplayer == 3) {
								local_player3.push(local_deck.splice(randomindex, 1));
								UNO.update({
									"deck" : local_deck
								});
								UNO.update({
									"player3" : local_player3
								});
							} else {
								local_player4.push(local_deck.splice(randomindex, 1));
								UNO.update({
									"deck" : local_deck
								});
								UNO.update({
									"player4" : local_player4
								});
							}
						}
					}
				} else if (event.target.id.charAt(1) == "D") {
					//next player force draw 2
					var nextplayer = get_next_player(local_current_player);
					for (var i = 0; i < 2; i++) {
						if (local_deck.length == 0) {
							var lastplayedcard = local_discard.pop();
							local_deck = local_discard.splice(0, local_discard.length);
							local_discard.push(lastplayedcard);
							UNO.update({
								"deck" : local_deck
							});
							UNO.update({
								"discard" : local_discard
							});
						}
						var randomindex = Math.round(Math.random() * (local_deck.length - 1));
						if (nextplayer == 1) {
							local_player1.push(local_deck.splice(randomindex, 1));
							UNO.update({
								"deck" : local_deck
							});
							UNO.update({
								"player1" : local_player1
							});
						} else if (nextplayer == 2) {
							local_player2.push(local_deck.splice(randomindex, 1));
							UNO.update({
								"deck" : local_deck
							});
							UNO.update({
								"player2" : local_player2
							});
						} else if (nextplayer == 3) {
							local_player3.push(local_deck.splice(randomindex, 1));
							UNO.update({
								"deck" : local_deck
							});
							UNO.update({
								"player3" : local_player3
							});
						} else {
							local_player4.push(local_deck.splice(randomindex, 1));
							UNO.update({
								"deck" : local_deck
							});
							UNO.update({
								"player4" : local_player4
							});
						}
					}
				} else if (event.target.id.charAt(1) == "S") {
					//skip the next player
					local_current_player = get_next_player(local_current_player);
					UNO.update({
						"current_player" : local_current_player
					});
				} else if (event.target.id.charAt(1) == "R") {
					//reverse the turn order
					if (local_player_order == "normal")
						local_player_order = "reverse";
					else
						local_player_order = "normal";
					UNO.update({
						"player_order" : local_player_order
					});
				}

				if (event.target.id.charAt(0) != "W") {
					local_current_player = get_next_player(local_current_player);
					UNO.update({
						"current_player" : local_current_player
					});
				}
			}
		}
	});

	$("#bluepick").click(function() {
		local_last_played_color = "B";
		UNO.update({
			"last_played_color" : local_last_played_color
		});
		local_current_player = get_next_player(local_current_player);
		UNO.update({
			"current_player" : local_current_player
		});
		$("#colorchoser").hide();
	});

	$("#yellowpick").click(function() {
		local_last_played_color = "Y";
		UNO.update({
			"last_played_color" : local_last_played_color
		});
		local_current_player = get_next_player(local_current_player);
		UNO.update({
			"current_player" : local_current_player
		});
		$("#colorchoser").hide();
	});

	$("#redpick").click(function() {
		local_last_played_color = "R";
		UNO.update({
			"last_played_color" : local_last_played_color
		});
		local_current_player = get_next_player(local_current_player);
		UNO.update({
			"current_player" : local_current_player
		});
		$("#colorchoser").hide();
	});

	$("#greenpick").click(function() {
		local_last_played_color = "G";
		UNO.update({
			"last_played_color" : local_last_played_color
		});
		local_current_player = get_next_player(local_current_player);
		UNO.update({
			"current_player" : local_current_player
		});
		$("#colorchoser").hide();
	});

	$("#player1pick").click(function() {
		this_player = "1";
		$(".playerarea").html("");
		for (var i = 0; i < local_player1.length; i++) {
			$(".playerarea").css("left", (-55 * ((local_player1.length / 2))) - 28);
			var styleinput = "style=\"right:" + (-55 * i) + "px;\"";
			$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" " + styleinput + "><img class=\"cardinhand\" id=\"" + local_player1[i] + "\" src=\"img/" + local_player1[i] + ".png\" /></div>");
		}
		$(".rightplayercardcount").html(local_player4.length.toString());
		$("#rightplayerlabel").html("Player 4");
		$(".topplayercardcount").html(local_player3.length.toString());
		$("#topplayerlabel").html("Player 3");
		$(".leftplayercardcount").html(local_player2.length.toString());
		$("#leftplayerlabel").html("Player 2");
		$("#playerchoser").hide();
	});
	$("#player2pick").click(function() {
		this_player = "2";
		$(".playerarea").html("");
		for (var i = 0; i < local_player2.length; i++) {
			$(".playerarea").css("left", (-55 * ((local_player2.length / 2))) - 28);
			var styleinput = "style=\"right:" + (-55 * i) + "px;\"";
			$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" " + styleinput + "><img class=\"cardinhand\" id=\"" + local_player2[i] + "\" src=\"img/" + local_player2[i] + ".png\" /></div>");
		}
		$(".rightplayercardcount").html(local_player1.length.toString());
		$("#rightplayerlabel").html("Player 1");
		$(".topplayercardcount").html(local_player4.length.toString());
		$("#topplayerlabel").html("Player 4");
		$(".leftplayercardcount").html(local_player3.length.toString());
		$("#leftplayerlabel").html("Player 3");
		$("#playerchoser").hide();
	});
	$("#player3pick").click(function() {
		this_player = "3";
		$(".playerarea").html("");
		for (var i = 0; i < local_player3.length; i++) {
			$(".playerarea").css("left", (-55 * ((local_player3.length / 2))) - 28);
			var styleinput = "style=\"right:" + (-55 * i) + "px;\"";
			$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" " + styleinput + "><img class=\"cardinhand\" id=\"" + local_player3[i] + "\" src=\"img/" + local_player3[i] + ".png\" /></div>");
		}
		$(".rightplayercardcount").html(local_player2.length.toString());
		$("#rightplayerlabel").html("Player 2");
		$(".topplayercardcount").html(local_player1.length.toString());
		$("#topplayerlabel").html("Player 1");
		$(".leftplayercardcount").html(local_player4.length.toString());
		$("#leftplayerlabel").html("Player 4");
		$("#playerchoser").hide();
	});
	$("#player4pick").click(function() {
		this_player = "4";
		$(".playerarea").html("");
		for (var i = 0; i < local_player4.length; i++) {
			$(".playerarea").css("left", (-55 * ((local_player4.length / 2))) - 28);
			var styleinput = "style=\"right:" + (-55 * i) + "px;\"";
			$(".playerarea").html($(".playerarea").html() + "<div class=\"cardinhanddiv\" " + styleinput + "><img class=\"cardinhand\" id=\"" + local_player4[i] + "\" src=\"img/" + local_player4[i] + ".png\" /></div>");
		}
		$(".rightplayercardcount").html(local_player3.length.toString());
		$("#rightplayerlabel").html("Player 3");
		$(".topplayercardcount").html(local_player2.length.toString());
		$("#topplayerlabel").html("Player 2");
		$(".leftplayercardcount").html(local_player1.length.toString());
		$("#leftplayerlabel").html("Player 1");
		$("#playerchoser").hide();
	});

	function get_next_player(playernumber) {
		if (local_player_order == "normal") {
			if (playernumber == "1") {
				return "2";
			} else if (playernumber == "2") {
				return "3";
			} else if (playernumber == "3") {
				return "4";
			} else {
				return "1";
			}
		} else {
			if (playernumber == "1") {
				return "4";
			} else if (playernumber == "2") {
				return "1";
			} else if (playernumber == "3") {
				return "2";
			} else {
				return "3";
			}
		}
	}

});
