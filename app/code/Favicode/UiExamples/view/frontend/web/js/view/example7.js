
define([
    'uiComponent',
    'jquery'
], function (Component, $) {
    'use strict';

    return Component.extend({

        defaults: {
            template: 'lol' //$('#hello-inline-template').get(0)
        },

        initialize: function () {
            console.log("example7 component initialize");

            //console.log($('#hello-inline-template').get(0));

            this._super();

            this.helloMessage = "Hello world !";
        },

        getTemplate: function() {
            return $('#hello-inline-template').get(0);
        }

    });
});
