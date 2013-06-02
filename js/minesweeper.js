var s,
MineSweeper = {

  settings: {
    numBoardSize: 5,
    numMines: $("#article-list"),
    startButton: $("#start-button"),
    endButton: $("#end-button")
  },

  init: function() {
    s = this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {
    s.startButton.on("click", function() {
      MineSweeper.startGame(s.numBoardSize);
    });
  },

  startGame: function(numTiles) {
    // $.ajax or something
    // using numTiles as param
  }

};