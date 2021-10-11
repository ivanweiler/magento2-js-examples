define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget('favicode.exampleWidget', {

        options: {
            selector: 'button'
        },

        /**
         * Constructor
         * @private
         */
        _create: function() {

            console.log('Construct');

            console.log(this.element);
            //console.log(this.options);

            this.element.click(function() {
                alert("Button, I am.");
            });

            /*
            $(this.options.selector).click(function() {
                alert("Button, I am.");
            });
            */

            //this.element.css( "background-color", this.options.color );
        }

    });

    return $.favicode.exampleWidget;
});

//when was this loaded ??