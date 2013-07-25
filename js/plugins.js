// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
 * plugin boilerplate
 *
 * options:
 *
 * @return {jQuery Object}
 */
(function( $ ){
    var defaults = {};
    var settings;

    var methods = {
        init : function( options )
        {
            // build settings-object from defaults
            settings = $.extend({}, defaults, options);

            return this.each(function()
            {
                var $this = $(this);
            });
        },
        etc : function( )
        {
        }
    };

    $.fn.fooPlugin = function( method )
    {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.fooPlugin' );
        }
    };
})( jQuery );
