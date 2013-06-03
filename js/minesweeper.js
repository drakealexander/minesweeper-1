;(function ( $ ) {
      if ( ! $.MineSweeper ) {
        $.MineSweeper = {};
      }
    $.MineSweeper.myMineSweeper = function ( el, myMineSweeperParam, options ) {

        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
    
        // Access to jQuery and DOM versions of element
        base.$el = $( el );
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data( "MineSweeper.myMineSweeper" , base );

        base.init = function () {
          base.myMineSweeperParam = myMineSweeperParam;

          base.settings = $.extend( {}, $.MineSweeper.myMineSweeper.defaults, options );

          // Put your initialization code here

        };

        // Sample Function, Uncomment to use
        // base.functionName = function( paramaters ){
        //
        // };

        // Run initializer
        base.init();
      };

      $.MineSweeper.myMineSweeper.defaults = {
        myDefaultValue: ""
      };

      $.fn.MineSweeper_myMineSweeper = function( myMineSweeperParam, options ) {
        return this.each( function () {
          ( new $.MineSweeper.myMineSweeper( this, myMineSweeperParam, options ) );
        });
      };

    } )( jQuery );