
define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({

        initialize: function () {

            this._super();

            console.log("example4 component initialize");

            this.helloMessage = "Hello world !";
            this.helloArray = this.helloMessage.split(' ');

            //@todo: pass config from init
        },

        helloMethod: function() {
            return "Hello method !";
        }

    });
});
