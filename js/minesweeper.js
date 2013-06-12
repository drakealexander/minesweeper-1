var s, MineSweeper = {

  var CELL_STATES = { NEW: 0, FLAG: 1, CLEAR: 2, BOMB: 3 };

  // SETTINGS
  settings: {
    divGame: $('#ms_game'),
    numGrid: 8,  // GRID SIZE
    numBombs: 4, // NUMBER OF BOMBS ON BOARD
    startButton: $("#start-button"),  // START BUTTON
    boardSquares: $("#board .square"),
    resetButton: $('#reset-button')

  }
  var ms_grid = [];
  var ms_timer = null;

  init: function() {
    // START THE GAME
    s = this.settings;
    var time_elapsed = 0;
    this.startTimer();
    this.bindUIActions();
  }

  startTimer(): function() {
    $('#timer-count').text(this.zeroPad(0, 3));
      clearInterval(timer);
      var ms = this;
      timer = window.setInterval(function(){

        ms.timeElapsed++;
        $('#score-time-count').text(ms.zeroPad(ms.timeElapsed, 3));

      }, 1000);
  },

  bindUIActions: function() {

    // START GAME
    s.startButton.on("click", function() {
      MineSweeper.startGame(s.numGrid, s.numBombs);
    });

    // RESET GAME
    s.resetButton.on('click', function(event) {
      MineSweeper.init();
    });

    // SURRENDER GAME
    s.giveupButton.on('click', function(event) {
      MineSweeper.giveUp();
    });

    // CELL CLICK
    s.boardSquares.on('click', function(event){
      MineSweeper.clickCell( $(this).attr('data-x'), $(this).attr('data-y') );
    });

    // FLAG CELL
    s.boardSquares.on('contextmenu rightclick', function(e){
      e.preventDefault();
      MineSweeper.flagCell($(this).attr('data-x'), $(this).attr('data-y'));
      return false;
    });
  },

};

(function() {

//Start game
MineSweeper.init();

})();