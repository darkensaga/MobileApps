var UNO = new Firebase('https://blinding-fire-9286.firebaseIO.com');
var deck = new Firebase('https://blinding-fire-9286.firebaseIO.com/deck');
var _origDeck = new Firebase('https://blinding-fire-9286.firebaseIO.com/_origDeck');
var player1 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player1');
var player2 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player2');
var player3 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player3');
var player4 = new Firebase('https://blinding-fire-9286.firebaseIO.com/player4');
var discard = new Firebase('https://blinding-fire-9286.firebaseIO.com/discard');
var local_deck = [];
var local_origDeck = [];
var local_player1 = [];
var local_player2 = [];
var local_player3 = [];
var local_player4 = [];
var local_discard = [];

$(document).ready(function() {
	
	deck.on('value', function (snapshot) {
	  local_deck = snapshot.val().toString().split(",");
	  //alert(local_deck.length);
	});
	_origDeck.on('value', function (snapshot) {
	  local_origDeck = snapshot.val().toString().split(",");
	});
	player1.on('value', function (snapshot) {
	  local_player1 = snapshot.val().toString().split(",");
	});
	player2.on('value', function (snapshot) {
	  local_player2 = snapshot.val().toString().split(",");
	});
	player3.on('value', function (snapshot) {
	  local_player3 = snapshot.val().toString().split(",");
	});
	player4.on('value', function (snapshot) {
	  local_player4 = snapshot.val().toString().split(",");
	});
	discard.on('value', function (snapshot) {
	  local_discard = snapshot.val().toString().split(",");
	});
	
	$(".drawdeck").click(function() {
		alert('draw clicked');
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
		alert('new game clicked');
	});
});
