"use strict";

var Menu = {
  preload: function() {
    // Loading images is equired to that later on we can create sprites based on them.
    // The first argument is how our image will be reffered to,
    // the second one is the path to our file.
    game.load.image('menu', './assets/images/proto/menu.svg');
  },

  create: function() {
    //Add a menu screen.
    // Prameters are : X, Y, image name (defined above), function to run, context to run it in?
    this.add.sprite(0, 0, 'menu', this.startGame, this);
  },

  startGame: function() {

    // Change state to the actual game.
    this.state.start('Game');

  }
};
