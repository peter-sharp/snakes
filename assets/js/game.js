"use strict";

var Snake,
    Rat,
    _squareSize,
    score,
    cursors,
    speedTextValue,
    speedTextValue,
    textStyle_key,
    textStyle_key,

var Game = {

  preload: function() {

    // Here we load all the needed sources for the level.
    // In our case, that's just three sprites - the snake body, the rat and the dessert.
    game.load.image('snake', './assets/images/proto/snake_body-basic.svg');
    game.load.image('rat', './assets/images/proto/rat.svg');
    game.load.image('desert', './assets/images/proto/desert.svg');
  },

  create: function() {

    // By setting up global variables in the create function, we initialise them on game start.
    // We need them to be globally available so that the update function can alter them.

    Snake = {
      type: '',
      state: 'alive',
      direction: 'up',
      segments: [],
      directionHistory: [],
      speed: 0,
      init: function(length, location){
        for( var i = 0; i < length; i++){
          this.segments[i] = game.add.sprite(location.x, location.y-i*_squareSize, 'snake'); 
        }
      },
      changeDirection: function(direction){},
    }

    Rat = {
      type: '',
      location: {x: 0, y: 0},
      locationHistory: [],
      respawn: function() [}],
    }

    _squareSize = 20;
    score = 0;

    // set up a Phaser controller for keyboard input.
    cursors = game.input.keyboard.createCursorkeys();

    game.stage.backgroundColor = '#CFC06E'
  }
}
