
define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({

        initialize: function () {

            this._super();

            console.log("example1 component initialize");

            this.helloMessage = "Hello world !";
            this.helloArray = this.helloMessage.split(' ');

            //@todo: add method and call from ko template

            //@todo: pass config from init
        },

        helloMethod: function() {
            return "Hello method !";
        }

    });
});
