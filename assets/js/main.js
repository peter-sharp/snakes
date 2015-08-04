"use strict";

var game;

//create a new game instance 400px width by 400px high:
game = new Phaser.Game(400, 400, Phaser.AUTO, '');

// Fist parameter is how our state will be called.
// Second parameter is an object containing the needed mwthods for state functionality
game.state.add('Menu', Menu);

// Add the game state
game.state.add('Game', Game);

game.state.start('Menu');
