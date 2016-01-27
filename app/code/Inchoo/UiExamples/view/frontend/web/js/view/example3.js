
define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Inchoo_UiExamples/example3'
        },

        initialize: function () {
            console.log("example3 component initialize");

            this._super();

            this.helloMessage = "Hello world !";
        }
    });
});
