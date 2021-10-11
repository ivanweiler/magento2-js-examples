
define([
    'ko',
    'uiComponent'
], function (ko, Component) {
    'use strict';

    return Component.extend({

        initialize: function(config) {

            console.log("example2 component initialize");
            console.log(config);

            this._super();

            //this.helloMessage = "Hello world !";
            //this.helloArray = ["Hello", "world", "!"];

            this.helloMessage = ko.observable("Hello world !");
            this.helloArray = ko.observableArray(["Hello", "world", "!"]);
        },

        addToArray: function() {

            this.helloArray.push("Push");
            console.log(this.helloArray());

            //this.helloMessage("Hello new world !");
        }

    });
});
