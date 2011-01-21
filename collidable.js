(function( $ ){

  $.fn.collidable = function( options ) {  
    //check what options is
    //function, just setup the bindings
    
    //array, foreach and set up objects and bindings
    
    //object, extend with defaults and set up bindings
    var defaults = {
      'location'         : 'top',
      'background-color' : 'blue'
    };

    return this.each(function() {        
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { 
        $.extend( defaults, options );
      }

     

    });

  };
})( jQuery );
