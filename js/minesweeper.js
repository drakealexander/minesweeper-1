var s, 
MineSweeper = {

  // SETTINGS
  settings: {
    divGame: $('#ms_game'),
    numGrid: 8,  // GRID SIZE
    numBombs: 4, // NUMBER OF BOMBS ON BOARD
    timerInterval: 1000, // TIMER INTERVAL IN MILLISECS
    timerStatus: 0, // 0 - TIMER STOPPED, 1 - TIMER RUNNING
    startButton: $("#start-button"),  // START BUTTON
    giveupButton: $("#giveup-button"),  // START BUTTON
    boardSquares: $("#board .square"),
    resetButton: $('#reset-button'),
    timer: $('#ms_timer'),
    CELL_STATES: { NEW: 0, FLAG: 1, CLEAR: 2, BOMB: 3 },
    ms_grid: [],
    ms_timer: null
  },


  init: function() {
    // START THE GAME
    s = this.settings;
    var time_elapsed = 0;
    this.bindUIActions();
  },

  startTimer: function() {
    var interval = (typeof(s.timerInterval) !== 'undefined') ? s.timerInterval : 1000;
    var start = new Date().getTime();
    var time = 0;
    var elapsed = '0.0';
    function instance()
    {
        time += interval;
        elapsed = Math.floor(time / interval) / 10;
        if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }
        s.timer.html(elapsed);
        var diff = (new Date().getTime() - start) - time;
        window.setTimeout(instance, (interval - diff));
    }
    if(s.timerStatus == 0) {
      s.timerStatus = 1;
      window.setTimeout(instance, interval);
    }
  },

  startGame: function(grid, bombs) {
        this.startTimer();
        alert("Grid: " + grid + ", Bombs: " + bombs);
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
  }

};

(function() {

//Start game
MineSweeper.init();

})();