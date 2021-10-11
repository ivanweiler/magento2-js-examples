
define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({

        initialize: function () {
            console.log("example1 component initialize");

            //initialize parent Component
            this._super();

            this.helloMessage = "Hello world !";
            this.helloArray = this.helloMessage.split(' ');
        },

        helloMethod: function() {
            return "Hello method !";
        }

    });
});
